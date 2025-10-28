<template>
  <section class="landing-intro py-[50px] sm:py-[109px] h-full">
    <div class="container">
      <div class="text-center mx-auto flex flex-col items-center">
        <h1 class="text-[32px] sm:text-[48px] text-white font-bold">
          {{ $t("landingIntro.title") }}
        </h1>
        <p
          class="max-w-[800px] text-[14px] sm:text-[20px] text-[#E5E5E5] pb-[32px] pt-[16px]"
        >
          {{ $t("landingIntro.subtitle") }}
        </p>
        <div class="flex gap-[15px] flex-wrap">
          <button
            class="bg-[#6633EE] text-white text-[16px] w-full sm:w-auto h-[48px] inline-flex items-center justify-center px-0 sm:px-[79px] rounded-lg hover:bg-blue-700 transition"
          >
            {{ $t("landingIntro.tryDemo") }}
          </button>
          <button
            class="bg-gradient-to-r from-[#6633EE1A] to-[#3D3D3D66] text-white text-[16px] w-full sm:w-auto h-[48px] inline-flex items-center justify-center px-0 sm:px-[71.5px] rounded-lg hover:opacity-90 transition"
          >
            {{ $t("landingIntro.getStarted") }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.landing-intro {
  background-image: url("@/shared/assets/svg/wave-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
