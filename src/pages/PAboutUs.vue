<script setup lang="ts">
import { useI18n } from "vue-i18n"
import CCallToAction from "@/widgets/calltoaction/ui/CCallToAction.vue"
import { CAboutUsCards, CAboutUsStory } from "@/widgets"

const { t } = useI18n()
</script>

<template>
  <div>
    <section class="aboutUsSection relative h-[calc(100vh-88px)]">
      <div
        class="container text-center sm:mt-[238px] mt-[211px] max-w-[1100px] w-full"
      >
        <h1
          class="font-bold text-[32px] sm:text-[56px] leading-125 mb-4 title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <span class="text-white">{{ t("aboutUsPage.heroTitle") }}</span>
        </h1>
        <p
          class="text-base sm:text-xl text-[#A3A3A3] font-normal mb-8 leading-[140%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {{ t("aboutUsPage.heroSubtitle") }}
        </p>
      </div>
    </section>

    <div class="aboutUsBgPattern">
      <CAboutUsCards />
      <CAboutUsStory />
    </div>

    <CCallToAction />
  </div>
</template>

<style scoped>
.aboutUsSection {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.aboutUsSection::before {
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
.aboutUsSection::after {
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

.aboutUsBgPattern {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}
.aboutUsBgPattern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("@/shared/assets/png/blur-bg.png") no-repeat center center;
  background-size: cover;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}
</style>
