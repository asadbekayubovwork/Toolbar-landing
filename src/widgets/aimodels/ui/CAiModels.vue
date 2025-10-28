<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
</script>

<template>
  <section
    class="aiModelsSection relative sm:py-[100px] py-[60px] overflow-hidden"
  >
    <div class="container">
      <!-- Header -->
      <h2
        class="text-3xl sm:text-5xl font-bold text-white text-center mb-4 leading-[140%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {{ $t("aiModels.titlePart1") }}
        <span class="text-[#6633EE]">
          {{ $t("aiModels.titlePart2") }}
        </span>
      </h2>
      <p
        class="font-normal text-center text-[#E5E5E5] mb-12 mx-auto text-base sm:text-lg leading-[140%] max-w-[587px] w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {{ $t("aiModels.subtitle") }}
      </p>

      <!-- Grid for models - 2x2 layout -->
      <div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-x-6 sm:gap-y-8 mb-8"
        >
          <!-- Card 1 -->
          <div
            class="group relative rounded-2xl bg-[#000000] p-6 sm:p-6 overflow-hidden transition-all duration-300 bg-[url('@/shared/assets/png/ai-models-1.png')] bg-right bg-no-repeat h-[228px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <!-- Content -->
            <div
              class="relative z-10 max-w-[412px] w-full h-full flex flex-col justify-between items-start"
            >
              <div>
                <h3
                  class="text-xl sm:text-2xl font-bold text-white mb-3 leading-[140%]"
                >
                  {{ $t("aiModels.card1.title") }}
                </h3>
                <p
                  class="text-[#D6D6D6] text-sm sm:text-base leading-[140%] mb-6"
                >
                  {{ $t("aiModels.card1.description") }}
                </p>
              </div>
              <button
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white font-medium text-sm sm:text-base rounded-xl transition-200 group-hover:gap-3"
              >
                {{ $t("aiModels.try") }}
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

          <!-- Card 2 -->
          <div
            class="group relative rounded-2xl bg-[#000000] p-6 sm:p-6 overflow-hidden transition-all duration-300 h-[228px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <!-- Content -->
            <div
              class="relative z-10 max-w-[412px] w-full h-full flex flex-col justify-between items-start"
            >
              <div>
                <h3
                  class="text-xl sm:text-2xl font-bold text-white mb-3 leading-[140%]"
                >
                  {{ $t("aiModels.card2.title") }}
                </h3>
                <p
                  class="text-[#D6D6D6] text-sm sm:text-base leading-[140%] mb-6"
                >
                  {{ $t("aiModels.card2.description") }}
                </p>
              </div>
              <button
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white font-medium text-sm sm:text-base rounded-xl transition-200 group-hover:gap-3"
              >
                {{ $t("aiModels.try") }}
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
            <div
              class="w-[172px] h-[185px] absolute -right-[24px] top-[73px] -rotate-[36deg] rounded-xl overflow-hidden"
            >
              <img
                src="@/shared/assets/png/ai-models-2.jpg"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="group relative rounded-2xl bg-[#000000] p-6 sm:p-6 overflow-hidden transition-all duration-300 h-[228px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <!-- Content -->
            <div
              class="relative z-10 max-w-[412px] w-full h-full flex flex-col justify-between items-start"
            >
              <div>
                <h3
                  class="text-xl sm:text-2xl font-bold text-white mb-3 leading-[140%]"
                >
                  {{ $t("aiModels.card3.title") }}
                </h3>
                <p
                  class="text-[#D6D6D6] text-sm sm:text-base leading-[140%] mb-6"
                >
                  {{ $t("aiModels.card3.description") }}
                </p>
              </div>
              <button
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white font-medium text-sm sm:text-base rounded-xl transition-200 group-hover:gap-3"
              >
                {{ $t("aiModels.try") }}
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
            <div
              class="w-[172px] h-[185px] absolute -right-[24px] top-[73px] -rotate-[36deg] rounded-xl overflow-hidden"
            >
              <img
                src="@/shared/assets/png/ai-models-3.jpg"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Card 4 -->
          <div
            class="group relative rounded-2xl bg-[#000000] p-6 sm:p-6 overflow-hidden transition-all duration-300 h-[228px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1400"
          >
            <!-- Content -->
            <div
              class="relative z-10 max-w-[412px] w-full h-full flex flex-col justify-between items-start"
            >
              <div>
                <h3
                  class="text-xl sm:text-2xl font-bold text-white mb-3 leading-[140%]"
                >
                  {{ $t("aiModels.card4.title") }}
                </h3>
                <p
                  class="text-[#D6D6D6] text-sm sm:text-base leading-[140%] mb-6"
                >
                  {{ $t("aiModels.card4.description") }}
                </p>
              </div>
              <button
                class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white font-medium text-sm sm:text-base rounded-xl transition-200 group-hover:gap-3"
              >
                {{ $t("aiModels.try") }}
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
            <div
              class="w-[172px] h-[185px] absolute -right-[24px] top-[73px] -rotate-[36deg] rounded-xl overflow-hidden"
            >
              <img
                src="@/shared/assets/png/ai-models-4.jpg"
                alt=""
                class="w-full h-full object-cover"
              />
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
            @click="router.push('/products/models')"
          >
            {{ $t("aiModels.seeMore") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aiModelsSection {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.aiModelsSection::before {
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
</style>
