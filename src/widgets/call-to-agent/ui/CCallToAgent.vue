<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue"

const isModalOpen = ref(false)
const callDuration = ref(0)
let timerInterval: ReturnType<typeof setInterval> | null = null

// WebRTC state
const API_BASE = "http://34.72.202.245:8040"
const peerConnection = ref<RTCPeerConnection | null>(null)
const dataChannel = ref<RTCDataChannel | null>(null)
const audioOutputEl = ref<HTMLAudioElement | null>(null)
const audioContext = ref<AudioContext | null>(null)
let inputStream: MediaStream | null = null
let webrtcId: string | null = null
const isConnecting = ref(false)

const formattedTime = computed(() => {
  const minutes = Math.floor(callDuration.value / 60)
  const seconds = callDuration.value % 60
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
})

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
  if (isModalOpen.value) {
    // Timer starts only after WebRTC is connected
  } else {
    stopTimer()
    callDuration.value = 0
    stopWebRTC()
  }
}

const closeModal = () => {
  isModalOpen.value = false
  stopTimer()
  callDuration.value = 0
  stopWebRTC()
}

const startTimer = () => {
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    callDuration.value++
  }, 1000)
}

const stopTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

const handleHangUp = () => {
  stopWebRTC()
  closeModal()
}

onUnmounted(() => {
  stopTimer()
  stopWebRTC()
})

async function setupWebRTC() {
  if (peerConnection.value || isConnecting.value) return
  isConnecting.value = true
  try {
    const rtcConfig =
      (
        globalThis as unknown as {
          __RTC_CONFIGURATION__?: Record<string, unknown>
        }
      ).__RTC_CONFIGURATION__ || {}
    peerConnection.value = new RTCPeerConnection(rtcConfig)
    webrtcId = Math.random().toString(36).substring(7)

    // Mic
    inputStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    inputStream
      .getTracks()
      .forEach((track) => peerConnection.value!.addTrack(track, inputStream!))

    // Data channel for control messages (optional, but mirrored from index.html)
    dataChannel.value = peerConnection.value.createDataChannel("text")
    dataChannel.value.onmessage = (event: MessageEvent) => {
      try {
        const msg = JSON.parse(event.data)
        if (msg?.type === "send_input") {
          // Forward API params if you have them; sending placeholders for now
          fetch(`${API_BASE}/input_hook`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              webrtc_id: webrtcId,
              api_key: "",
              voice_name: "Puck",
            }),
          })
        }
      } catch {
        /* noop */
      }
    }

    // Remote audio
    peerConnection.value.addEventListener("track", (evt) => {
      if (evt.track.kind === "audio" && audioOutputEl.value) {
        if (audioOutputEl.value.srcObject !== evt.streams[0]) {
          audioOutputEl.value.srcObject = evt.streams[0]
          audioOutputEl.value.play().catch(() => {
            // autoplay might be blocked; user interacted via click already
          })
        }
      }
    })

    // Update timer based on connection state
    peerConnection.value.addEventListener("connectionstatechange", () => {
      const state = peerConnection.value?.connectionState
      if (state === "connected") {
        startTimer()
      } else if (
        state === "disconnected" ||
        state === "failed" ||
        state === "closed"
      ) {
        stopTimer()
        callDuration.value = 0
      }
    })

    // ICE candidates to server
    peerConnection.value.onicecandidate = ({ candidate }) => {
      if (!candidate) return
      fetch(`${API_BASE}/webrtc/offer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidate: candidate.toJSON(),
          webrtc_id: webrtcId,
          type: "ice-candidate",
        }),
      }).catch(() => {
        /* noop */
      })
    }

    // SDP offer/answer
    const offer = await peerConnection.value.createOffer()
    await peerConnection.value.setLocalDescription(offer)

    const response = await fetch(`${API_BASE}/webrtc/offer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sdp: peerConnection.value.localDescription?.sdp,
        type: peerConnection.value.localDescription?.type,
        webrtc_id: webrtcId,
      }),
    })
    const answer = await response.json()

    if (answer?.status === "failed") {
      // Basic error handling; you can surface via UI if desired
      stopWebRTC()
      return
    }

    await peerConnection.value.setRemoteDescription(answer)
  } catch {
    stopWebRTC()
  } finally {
    isConnecting.value = false
  }
}

function stopWebRTC() {
  try {
    if (peerConnection.value) {
      try {
        peerConnection.value
          .getSenders()
          .forEach((s) => s.track && s.track.stop())
      } catch {
        /* noop */
      }
      try {
        if (dataChannel.value) {
          dataChannel.value.close()
        }
      } catch {
        /* noop */
      }
      try {
        peerConnection.value.close()
      } catch {
        /* noop */
      }
    }
  } finally {
    peerConnection.value = null
    dataChannel.value = null
    webrtcId = null
    stopTimer()
    callDuration.value = 0
    if (audioOutputEl.value) {
      audioOutputEl.value.pause()
      audioOutputEl.value.srcObject = null
    }
    if (audioContext.value && audioContext.value.state !== "closed") {
      audioContext.value.close().catch(() => {
        /* noop */
      })
    }
    audioContext.value = null
    if (inputStream) {
      try {
        inputStream.getTracks().forEach((t) => t.stop())
      } catch {
        /* noop */
      }
      inputStream = null
    }
  }
}

function handleMicClick() {
  if (!peerConnection.value) {
    setupWebRTC()
  }
}
</script>

<template>
  <!-- Fixed Button -->
  <button
    v-if="!isModalOpen"
    @click="toggleModal"
    class="call-to-agent-button fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-[#121212] hover:bg-[#2A2A2A] text-white px-6 py-3 rounded-[100px] flex items-center gap-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
    aria-label="Talk to an agent"
  >
    <div class="w-12 h-12 rounded-full overflow-hidden">
      <img
        src="@/shared/assets/png/ai.png"
        alt="call-to-agent"
        class="w-full h-full"
      />
    </div>
    <span class="text-lg font-semibold whitespace-nowrap"
      >Talk to an agent</span
    >
  </button>

  <!-- Modal -->
  <Transition name="modal">
    <div
      v-if="isModalOpen"
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] flex items-center justify-center p-4 pointer-events-none"
    >
      <!-- Modal Content -->
      <div
        class="call-agent-modal text-center bg-[#1A1A1A] rounded-3xl w-[300px] sm:w-[457px] sm:h-[420px] relative pointer-events-auto p-6"
      >
        <!-- Top Section -->
        <div class="flex items-center justify-between sm:mb-6">
          <!-- Timer -->
          <div class="text-white text-base font-medium">
            {{ formattedTime }}
          </div>
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="w-11 h-11 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 11M11 1L1 11"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <!-- Middle Section - Avatar -->
        <div class="flex flex-col items-center mb-4 sm:mb-8">
          <!-- Purple Gradient Avatar -->
          <div
            class="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-full mb-5 flex-shrink-0 overflow-hidden"
          >
            <img
              src="@/shared/assets/png/ai.png"
              alt="call-to-agent"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Assistant Name -->
          <h3 class="text-white text-xl font-bold mb-2">ToolBar</h3>
          <!-- Assistant Tagline -->
          <p class="text-white font-normal text-sm">Your toolbar assistent</p>
        </div>

        <!-- Bottom Section - Controls -->
        <div class="flex flex-col items-center">
          <!-- Control Buttons -->
          <div class="flex items-center gap-8 mb-5">
            <!-- Microphone Button -->
            <button
              @click="handleMicClick"
              class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Microphone"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2Z"
                  fill="black"
                />
                <path
                  d="M19 11C19 15.42 15.42 19 11 19H13M11 19C7.58 19 5 16.42 5 13M13 19V22M9 22H15"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Hang Up Button -->
            <button
              @click="handleHangUp"
              class="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#EF4444] hover:bg-[#DC2626] flex items-center justify-center transition-colors shadow-lg"
              aria-label="Hang up"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L19 19M19 1L1 19"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <!-- Footer Text -->
          <p class="text-gray-400 text-xs mb-2">
            Discover the capabilites of Conversational AI
          </p>
          <p class="text-gray-400 text-xs">Agents powered by Toolbar</p>
        </div>
        <!-- Hidden audio sink for remote stream -->
        <audio ref="audioOutputEl" style="display: none"></audio>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.call-to-agent-button {
  box-shadow: 0 4px 20px rgba(102, 51, 238, 0.3);
}

.call-to-agent-button:hover {
  box-shadow: 0 6px 25px rgba(102, 51, 238, 0.4);
}

.call-agent-modal {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: modalFadeIn 0.3s ease-out;
}

/* Modal Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .call-agent-modal,
.modal-leave-active .call-agent-modal {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.modal-enter-from .call-agent-modal,
.modal-leave-to .call-agent-modal {
  transform: scale(0.9);
  opacity: 0;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
