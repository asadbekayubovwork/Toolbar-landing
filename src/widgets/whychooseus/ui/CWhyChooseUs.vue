<script setup lang="ts"></script>

<template>
  <section class="hero h-screen sm:p-[100px] p-[40px]">
    <h2 class="text-2xl sm:text-4xl font-bold text-white text-center">
      {{ $t("whyChooseUs.title") }}
    </h2>
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

  filter: blur(80px);
  z-index: 1;
  pointer-events: none;
}
</style>
