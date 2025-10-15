<script setup lang="ts"></script>

<template>
  <section class="why-choose-us sm:py-[100px] py-[60px] sm:px-[100px] px-[20px]">
    <div class="content-wrapper">
      <h2 class="title text-3xl sm:text-5xl font-bold text-white text-center mb-6">
        {{ $t("whyChooseUs.titlePart1") }}
        <span class="highlight">{{ $t("whyChooseUs.titlePart2") }}</span>
      </h2>
      <p class="subtitle text-center text-gray-300 mb-16 max-w-4xl mx-auto">
        {{ $t("whyChooseUs.subtitle") }}
      </p>

      <div class="cards-grid">
        <!-- Card 1: Localized AI Expertise -->
        <div class="card card-purple">
          <div class="card-content">
            <h3 class="card-title text-2xl sm:text-3xl font-bold text-white mb-4">
              {{ $t("whyChooseUs.card1.title") }}
            </h3>
            <p class="card-description text-gray-300">
              {{ $t("whyChooseUs.card1.description") }}
            </p>
          </div>
          <div class="card-decoration decoration-1"></div>
        </div>

        <!-- Card 2: Seamless Productivity -->
        <div class="card card-dark">
          <div class="card-content">
            <h3 class="card-title text-2xl sm:text-3xl font-bold text-white mb-4">
              {{ $t("whyChooseUs.card2.title") }}
            </h3>
            <p class="card-description text-gray-300">
              {{ $t("whyChooseUs.card2.description") }}
            </p>
          </div>
          <div class="card-decoration decoration-2"></div>
        </div>

        <!-- Card 3: Scalable Solutions -->
        <div class="card card-dark">
          <div class="card-content">
            <h3 class="card-title text-2xl sm:text-3xl font-bold text-white mb-4">
              {{ $t("whyChooseUs.card3.title") }}
            </h3>
            <p class="card-description text-gray-300">
              {{ $t("whyChooseUs.card3.description") }}
            </p>
          </div>
          <div class="card-decoration decoration-3"></div>
        </div>

        <!-- Card 4: Reliable & Secure -->
        <div class="card card-purple-gradient">
          <div class="card-content">
            <h3 class="card-title text-2xl sm:text-3xl font-bold text-white mb-4">
              {{ $t("whyChooseUs.card4.title") }}
            </h3>
            <p class="card-description text-gray-300">
              {{ $t("whyChooseUs.card4.description") }}
            </p>
          </div>
          <div class="card-decoration decoration-4"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-us {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.why-choose-us::before {
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

.content-wrapper {
  position: relative;
  z-index: 2;
}

.title {
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card {
  position: relative;
  border-radius: 24px;
  padding: 40px;
  min-height: 280px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-title {
  line-height: 1.2;
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
}

/* Card 1 - Purple gradient with 3D cube decoration */
.card-purple {
  background: linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%);
}

.decoration-1 {
  position: absolute;
  right: -50px;
  bottom: -50px;
  width: 300px;
  height: 300px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238b5cf6;stop-opacity:0.4' /%3E%3Cstop offset='100%25' style='stop-color:%236d28d9;stop-opacity:0.6' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z' fill='url(%23grad1)' /%3E%3Cpath d='M100 20 L180 60 L100 100 L20 60 Z' fill='%238b5cf6' opacity='0.3' /%3E%3Cpath d='M100 100 L180 60 L180 140 L100 180 Z' fill='%236d28d9' opacity='0.4' /%3E%3C/svg%3E")
    no-repeat center;
  background-size: contain;
  opacity: 0.5;
  z-index: 1;
}

/* Card 2 - Dark with torus decoration */
.card-dark {
  background: linear-gradient(135deg, #1f1f2e 0%, #15151f 100%);
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.decoration-2 {
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  width: 280px;
  height: 280px;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.3) 0%,
    rgba(124, 58, 237, 0.2) 30%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 1;
}

.decoration-2::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: #15151f;
  box-shadow: inset 0 0 40px rgba(139, 92, 246, 0.3);
}

/* Card 3 - Dark with abstract wave decoration */
.decoration-3 {
  position: absolute;
  right: -60px;
  bottom: -60px;
  width: 280px;
  height: 280px;
  background: linear-gradient(
    45deg,
    rgba(139, 92, 246, 0.2) 0%,
    rgba(124, 58, 237, 0.3) 50%,
    rgba(109, 40, 217, 0.2) 100%
  );
  filter: blur(40px);
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  z-index: 1;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  50% {
    border-radius: 70% 30% 50% 50% / 30% 60% 70% 40%;
  }
}

/* Card 4 - Purple gradient with spiral decoration */
.card-purple-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
}

.decoration-4 {
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  width: 250px;
  height: 250px;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(167, 139, 250, 0.4) 90deg,
    rgba(139, 92, 246, 0.5) 180deg,
    rgba(124, 58, 237, 0.4) 270deg,
    transparent 360deg
  );
  border-radius: 50%;
  z-index: 1;
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .card {
    padding: 30px;
    min-height: 240px;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-description {
    font-size: 0.95rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
