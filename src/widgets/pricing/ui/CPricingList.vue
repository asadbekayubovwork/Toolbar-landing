<script setup lang="ts"></script>

<template>
  <section class="pricing-section sm:py-[100px] py-[74px]">
    <div class="container">
      <!-- Header -->
      <div class="pricing-header">
        <h2
          class="title text-4xl sm:text-5xl font-semibold sm:font-bold text-white sm:mb-4 mb-5 text-center leading-[44px] sm:leading-140"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {{ $t("pricing.title") }}
        </h2>
        <p
          class="subtitle text-[#E5E5E5] text-sm sm:text-xl text-center mb-12 sm:mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {{ $t("pricing.subtitle") }}
        </p>
      </div>

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
            <h3 class="text-2xl font-medium text-white mb-[6px] leading-[31px]">
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
            <h3 class="text-2xl font-medium text-white mb-[6px] leading-[31px]">
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
            <h3 class="text-2xl font-medium text-white mb-[6px] leading-[31px]">
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
  </section>
</template>

<style>
.pricing-section {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.pricing-section::before {
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

.pricing-header {
  margin-bottom: 0px;
}

.title {
  line-height: 1.2;
}

.subtitle {
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Pricing Cards Grid */
.pricing-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .pricing-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media (min-width: 1024px) {
  .pricing-cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

/* Pricing Card */
.pricing-card {
  background: #0000000f;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 500px;
}

.pricing-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
}

.pricing-card-highlighted {
  background: #000000;
  /* border-color: rgba(139, 92, 246, 0.5); */
  background:
    linear-gradient(180deg, #010002 29%, #361764 100%),
    linear-gradient(180deg, #000000 29%, rgba(0, 0, 0, 0) 100%);

  box-shadow: 0px 10px 74px 10px #4e00bf69;
}

.pricing-card-highlighted::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.05) 0%,
    rgba(124, 58, 237, 0.05) 100%
  );
  z-index: 0;
  pointer-events: none;
}

.pricing-card-highlighted:hover {
  box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
}

/* CTA Button */
.cta-button {
  width: 100%;
  padding: 16px 32px;
  background: #3d3d3d66;
  color: white;
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  border: 1px solid #ffffff26;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.cta-button:hover {
  background: rgba(139, 92, 246, 0.2);
  border-color: rgba(139, 92, 246, 0.5);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-button-highlighted {
  background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);
  border: none;
}

.cta-button-highlighted:hover {
  background: linear-gradient(90deg, #9d71f7 0%, #8d4bf8 100%);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .pricing-cards-grid {
    max-width: 700px;
  }
}

@media (max-width: 767px) {
  .pricing-section {
    padding: 40px 16px;
  }

  .title {
    font-size: 2rem;
    line-height: 1.3;
  }

  .subtitle {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  .pricing-header {
    margin-bottom: 32px;
  }

  .pricing-card {
    padding: 28px 24px;
  }

  .cta-button {
    padding: 14px 28px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .pricing-section {
    padding: 30px 12px;
  }

  .title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .pricing-card {
    padding: 24px 20px;
    border-radius: 16px;
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
}

/* Grid adjustments for single column on tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  .pricing-cards-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
