<script setup lang="ts"></script>

<template>
  <section
    class="container relative sm:py-[100px] py-[60px] bg-[#0e041f] overflow-hidden"
  >
    <div>
      <h2
        class="text-3xl sm:text-5xl font-bold text-white text-center mb-4 leading-[140%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {{ $t("whyChooseUs.titlePart1") }}
        <span class="text-[#6633EE]">
          {{ $t("whyChooseUs.titlePart2") }}
        </span>
      </h2>
      <p
        class="font-normal text-center text-[#E5E5E5] mb-10 mx-auto text-base sm:text-lg leading-[140%] max-w-[700px] w-full"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {{ $t("whyChooseUs.subtitle") }}
      </p>

      <div class="mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Card 1: Localized AI Expertise -->
          <div
            class="relative rounded-3xl p-6 sm:p-8 min-h-[200px] sm:min-h-[280px] whyChooseUsPattern transition-transform duration-300 hover:-translate-y-1.5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <h3
              class="text-xl sm:text-2xl md:text-[34px] font-semibold text-white leading-[140%] mb-6"
            >
              {{ $t("whyChooseUs.card1.title") }}
            </h3>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ $t("whyChooseUs.card1.description") }}
            </p>
          </div>

          <!-- Card 2: Seamless Productivity -->
          <div
            class="relative rounded-3xl p-6 sm:p-8 min-h-[200px] sm:min-h-[280px] whyChooseUsPattern transition-transform duration-300 hover:-translate-y-1.5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <h3
              class="text-xl sm:text-2xl md:text-[34px] font-semibold text-white leading-[140%] mb-6"
            >
              {{ $t("whyChooseUs.card2.title") }}
            </h3>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ $t("whyChooseUs.card2.description") }}
            </p>
          </div>

          <!-- Card 3: Scalable Solutions -->
          <div
            class="relative rounded-3xl p-6 sm:p-8 min-h-[200px] sm:min-h-[280px] whyChooseUsPattern transition-transform duration-300 hover:-translate-y-1.5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h3
              class="text-xl sm:text-2xl md:text-[34px] font-semibold text-white leading-[140%] mb-6"
            >
              {{ $t("whyChooseUs.card3.title") }}
            </h3>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ $t("whyChooseUs.card3.description") }}
            </p>
          </div>

          <!-- Card 4: Reliable & Secure -->
          <div
            class="relative rounded-3xl p-6 sm:p-8 min-h-[200px] sm:min-h-[280px] whyChooseUsPattern transition-transform duration-300 hover:-translate-y-1.5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <h3
              class="text-xl sm:text-2xl md:text-[34px] font-semibold text-white leading-[140%] mb-6"
            >
              {{ $t("whyChooseUs.card4.title") }}
            </h3>
            <p class="text-gray-300 text-sm sm:text-base leading-relaxed">
              {{ $t("whyChooseUs.card4.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.whyChooseUsPattern {
  background:
    linear-gradient(0deg, rgba(39, 40, 41, 0.7), rgba(39, 40, 41, 0.7)),
    linear-gradient(119.3deg, rgba(0, 0, 0, 0) 23.34%, #6633ee 96.36%);
}
</style>
