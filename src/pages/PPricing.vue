<script setup lang="ts">
import CCallToAction from "@/widgets/calltoaction/ui/CCallToAction.vue"
</script>

<template>
  <div>
    <section class="pricingSection relative h-[calc(100vh-88px)]">
      <div class="container text-center sm:mt-[238px] mt-[211px] max-w-[981px]">
        <h1
          class="font-bold text-[32px] sm:text-[56px] leading-[125%] mb-4 title"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <span class="text-white">{{ $t("pricing.pageTitle") }}</span>
        </h1>
        <p
          class="text-base sm:text-xl text-[#A3A3A3] font-normal mb-8 leading-[140%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {{ $t("pricing.pageSubtitle") }}
        </p>
      </div>
    </section>
    <div class="pricing-bg-pattern">
      <div class="container sm:py-[100px] py-[60px]">
        <!-- Pricing Cards -->
        <div class="pricing-cards-grid">
          <!-- Pricing Card -->
          <div
            class="pricing-card border border-[#ffffff26]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <!-- Card Header -->
            <div class="relative z-[1]">
              <h3
                class="text-2xl font-medium text-white mb-[6px] leading-[31px]"
              >
                {{ $t("pricing.basic.name") }}
              </h3>
              <h4 class="text-base text-[#FFFFFFB2] font-normal">
                {{ $t("pricing.basic.price") }}
              </h4>
            </div>

            <!-- Divider -->
            <div class="w-full h-[1px] bg-[#282729] my-5"></div>

            <!-- Features List -->
            <ul class="list-none p-0 m-0 flex-grow relative z-[1]">
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.basic.feature1")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.basic.feature2")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.basic.feature3")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.basic.feature4")
                }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button @click="$router.push('/contact-us')" class="cta-button">
              {{ $t("pricing.joinWaitlist") }}
            </button>
          </div>

          <!-- Pro Card (Highlighted) -->
          <div
            class="pricing-card pricing-card-highlighted"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <!-- Card Header -->
            <div class="relative z-[1]">
              <h3
                class="text-2xl font-medium text-white mb-[6px] leading-[31px]"
              >
                {{ $t("pricing.pro.name") }}
              </h3>
              <h4 class="text-base text-[#FFFFFFB2] font-normal">
                {{ $t("pricing.pro.price") }}
              </h4>
            </div>

            <!-- Divider -->
            <div class="w-full h-[1px] bg-[#282729] my-5"></div>

            <!-- Features List -->
            <ul class="list-none p-0 m-0 flex-grow relative z-[1]">
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.pro.feature1")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.pro.feature2")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.pro.feature3")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.pro.feature4")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.pro.feature5")
                }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button
              @click="$router.push('/contact-us')"
              class="cta-button cta-button-highlighted"
            >
              {{ $t("pricing.joinWaitlist") }}
            </button>
          </div>

          <!-- Business Card -->
          <div
            class="pricing-card border border-[#ffffff26]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <!-- Card Header -->
            <div class="relative z-[1]">
              <h3
                class="text-2xl font-medium text-white mb-[6px] leading-[31px]"
              >
                {{ $t("pricing.business.name") }}
              </h3>
              <h4 class="text-base text-[#FFFFFFB2] font-normal">
                {{ $t("pricing.business.price") }}
              </h4>
            </div>

            <!-- Divider -->
            <div class="w-full h-[1px] bg-[#282729] my-5"></div>

            <!-- Features List -->
            <ul class="list-none p-0 m-0 flex-grow relative z-[1]">
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature1")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature2")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature3")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature4")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature5")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature6")
                }}</span>
              </li>
              <li class="flex items-center gap-2.5 py-2.5 text-white">
                <svg
                  class="flex-shrink-0 text-[#FFFFFF]"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6667 5L7.50004 14.1667L3.33337 10"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-sm font-normal leading-140">{{
                  $t("pricing.business.feature7")
                }}</span>
              </li>
            </ul>

            <!-- CTA Button -->
            <button @click="$router.push('/contact-us')" class="cta-button">
              {{ $t("pricing.joinWaitlist") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <CCallToAction />
  </div>
</template>

<style scoped>
.pricingSection {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.pricingSection::before {
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
.pricingSection::after {
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
.pricing-bg-pattern {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}
.pricing-bg-pattern::before {
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
