<script setup lang="ts">
import { useHead } from "@vueuse/head"
import CCallToAction from "@/widgets/calltoaction/ui/CCallToAction.vue"
import { useRouter } from "vue-router"

const router = useRouter()

// SEO Meta Tags
useHead({
  title: "AI Models - Toolbar AI | Advanced Machine Learning & Neural Networks",
  meta: [
    {
      name: "description",
      content:
        "Access cutting-edge AI Models through Toolbar AI. Leverage powerful machine learning models, neural networks, GPT integration, and advanced AI technology directly from your browser. Experience intelligent toolbar features powered by state-of-the-art AI models - the ultimate Google Toolbar alternative with AI capabilities.",
    },
    {
      name: "keywords",
      content:
        "AI models, machine learning models, neural networks, GPT models, ChatGPT toolbar, AI model integration, browser AI models, toolbar AI models, intelligent models, deep learning models, AI language models, transformer models, AI neural networks, ML models, artificial intelligence models, browser ML, toolbar machine learning, AI model toolbar, GPT integration, ChatGPT integration, AI technology, neural network toolbar, smart AI models, browser AI technology, intelligent ML, AI model platform, toolbar neural networks, AI language processing, NLP models, AI model API, browser ML integration, toolbar AI technology, smart machine learning, AI model access, neural AI toolbar",
    },
    // Open Graph Tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://toolbar-ai.com/products/models" },
    {
      property: "og:title",
      content: "AI Models - Advanced Machine Learning | Toolbar AI",
    },
    {
      property: "og:description",
      content:
        "Access powerful AI models and neural networks through your browser toolbar. GPT, ChatGPT, and advanced ML models integrated seamlessly.",
    },
    {
      property: "og:image",
      content: "https://toolbar-ai.com/og-image-models.jpg",
    },
    { property: "og:site_name", content: "Toolbar AI" },
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@toolbarai" },
    {
      name: "twitter:title",
      content: "AI Models - Machine Learning & Neural Networks | Toolbar AI",
    },
    {
      name: "twitter:description",
      content:
        "Leverage advanced AI models, GPT, ChatGPT, and neural networks directly from your browser toolbar.",
    },
    {
      name: "twitter:image",
      content: "https://toolbar-ai.com/twitter-card-models.jpg",
    },
    // Additional SEO Tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Toolbar AI Team" },
  ],
  link: [{ rel: "canonical", href: "https://toolbar-ai.com/products/models" }],
})
</script>

<template>
  <div>
    <section class="hero">
      <div
        class="container text-center pt-[120px] md:pt-[167px] flex flex-col justify-between h-full"
      >
        <div class="max-w-[1055px] w-full mx-auto mb-[58px] sm:mb-[60px]">
          <h1
            class="font-bold text-[32px] sm:text-[56px] mb-4 title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {{ $t("modelsPage.heroTitle") }}
          </h1>

          <p
            class="text-base sm:text-xl text-[#A3A3A3] font-normal mb-8 leading-[140%]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {{ $t("modelsPage.heroSubtitle") }}
          </p>
        </div>
        <img
          src="@/shared/assets/png/agents-hero.png"
          alt="hero"
          class="relative z-10"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="800"
        />
      </div>
    </section>
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
          </div>
        </div>
      </div>
    </section>
    <CCallToAction />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.hero::before {
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
.hero::after {
  content: "";
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 150%;
  background: radial-gradient(
    217.23% 100.08% at 50% 18.33%,
    rgba(0, 0, 0, 0) 21.67%,
    #6633ee 69.34%,
    #ffffff 100%
  );

  filter: blur(80px);
  z-index: 1;
  pointer-events: none;
}

/* Alternative: Radial gradient (Figmaga yaqinroq) */
.title {
  background: radial-gradient(
    ellipse at 50% 0%,
    #ffffff 0%,
    #a78bfa 30%,
    #6633ee 60%,
    #4c1d95 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
