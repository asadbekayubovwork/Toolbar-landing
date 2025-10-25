<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

interface AgentCard {
  id: number
  image: string
  title: string
  description: string
  hasVideo?: boolean
}

const agents = ref<AgentCard[]>([
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop",
    title: "aiAgents.card1.title",
    description: "aiAgents.card1.description",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    title: "aiAgents.card2.title",
    description: "aiAgents.card2.description",
    hasVideo: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
    title: "aiAgents.card3.title",
    description: "aiAgents.card3.description",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
    title: "aiAgents.card4.title",
    description: "aiAgents.card4.description",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    title: "aiAgents.card5.title",
    description: "aiAgents.card5.description",
  },
])
</script>

<template>
  <section
    class="aiAgentsSection relative sm:py-[100px] py-[60px] overflow-hidden"
  >
    <div class="container">
      <!-- Header -->
      <h2
        class="text-3xl sm:text-5xl font-bold text-white text-center mb-4 leading-[140%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {{ $t("aiAgents.titlePart1") }}
        <span class="text-[#6633EE]">
          {{ $t("aiAgents.titlePart2") }}
        </span>
      </h2>
      <p
        class="font-normal text-center text-[#E5E5E5] mb-12 mx-auto text-base sm:text-lg leading-[140%] max-w-[587px] w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {{ $t("aiAgents.subtitle") }}
      </p>

      <!-- Grid for larger screens (3 columns top, 2 columns bottom) -->
      <div class="mx-auto">
        <!-- Top row - 3 cards -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-8"
        >
          <div
            v-for="agent in agents.slice(0, 3)"
            :key="agent.id"
            class="group relative rounded-2xl overflow-hidden transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="600 + agent.id * 200"
          >
            <!-- Image Container -->
            <div
              class="relative overflow-hidden max-h-[307px] mb-6 rounded-2xl"
            >
              <img
                :src="agent.image"
                :alt="$t(agent.title)"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <!-- Play button overlay for video -->
              <div
                v-if="agent.hasVideo"
                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300"
              >
                <div
                  class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 text-[#6633EE] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div>
              <h3
                class="text-lg sm:text-xl font-semibold text-white mb-2 leading-[140%]"
              >
                {{ $t(agent.title) }}
              </h3>
              <p
                class="text-[#D6D6D6] text-sm sm:text-base leading-[140%] mb-4"
              >
                {{ $t(agent.description) }}
              </p>
              <button
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white font-medium text-sm sm:text-base rounded-xl transition-200 group-hover:gap-3"
              >
                {{ $t("aiAgents.explore") }}
                <svg
                  class="w-4 h-4 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Bottom row - 2 cards centered -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8"
        >
          <div
            v-for="agent in agents.slice(3, 5)"
            :key="agent.id"
            class="group relative overflow-hidden h-full transition-all duration-300 lg:first:col-start-1 lg:last:col-start-2"
            :class="{
              'lg:col-start-1': agent.id === 4,
              'lg:col-start-2': agent.id === 5,
            }"
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="600 + agent.id * 200"
          >
            <!-- Image Container -->
            <div
              class="relative overflow-hidden max-h-[307px] mb-6 rounded-2xl"
            >
              <img
                :src="agent.image"
                :alt="$t(agent.title)"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <!-- Content -->
            <div>
              <h3
                class="text-lg sm:text-xl font-semibold text-white mb-2 leading-[140%]"
              >
                {{ $t(agent.title) }}
              </h3>
              <p
                class="text-[#D6D6D6] text-sm sm:text-base leading-[140%] mb-4"
              >
                {{ $t(agent.description) }}
              </p>
              <button
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white font-medium text-sm sm:text-base rounded-xl transition-200 group-hover:gap-3"
              >
                {{ $t("aiAgents.explore") }}
                <svg
                  class="w-4 h-4 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- See More Button -->
        <div class="flex justify-center mt-8">
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
            class="w-full sm:max-w-[400px] bg-[#6633EE] h-12 hover:bg-[#6633EE]/80 text-white font-medium text-base sm:text-lg rounded-xl transition-all duration-300"
            @click="router.push('/products/agents')"
          >
            {{ $t("aiAgents.seeMore") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aiAgentsSection {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.aiAgentsSection::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/shared/assets/png/blur-bg.png");
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}
/* Grid layout for larger screens */
@media (min-width: 1024px) {
  .lg\:col-start-1 {
    grid-column-start: 1;
  }
  .lg\:col-start-2 {
    grid-column-start: 2;
  }
}
</style>
