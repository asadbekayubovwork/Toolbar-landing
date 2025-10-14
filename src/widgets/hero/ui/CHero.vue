<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
  <section class="hero">
    <div
      class="container text-center pt-[167px] flex flex-col justify-between h-full"
    >
      <div class="max-w-[1055px] w-full mx-auto mb-[60px]">
        <h1 class="font-bold text-[56px] leading-[100%] mb-4 title">
          <span class="text-white">{{ $t("hero.title") }}</span>
          <br v-if="$t('hero.titleHighlight')" />
          <span
            v-if="$t('hero.titleHighlight')"
            class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >{{ $t("hero.titleHighlight") }}</span
          >
        </h1>

        <p class="text-xl text-[#A3A3A3] font-normal mb-8">
          {{ $t("hero.subtitle") }}
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <RouterLink
            to="/demo"
            class="w-[231px] h-[48px] bg-[#6633EE] hover:bg-[#6633EE]/70 transition-300 flex items-center justify-center rounded-xl text-white font-medium"
          >
            {{ $t("hero.tryDemo") }}
          </RouterLink>

          <RouterLink
            to="/get-started"
            class="w-[231px] h-[48px] bg-[#3D3D3D66] hover:bg-[#3D3D3D66]/50 border border-[#FFFFFF1A] transition-300 flex items-center justify-center rounded-xl text-white font-medium"
          >
            {{ $t("hero.getStarted") }}
          </RouterLink>
        </div>
      </div>
      <img
        src="@/shared/assets/png/hero-img.png"
        alt="hero"
        class="relative z-10"
      />
    </div>
  </section>
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
