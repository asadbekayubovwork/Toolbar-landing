<script setup lang="ts">
interface AboutCard {
  id: string
  icon: string
  delay: number
}

const cards: AboutCard[] = [
  {
    id: "accessibility",
    icon: `<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 6C12.3956 6 12.7822 6.1173 13.1111 6.33706C13.44 6.55682 13.6964 6.86918 13.8478 7.23463C13.9991 7.60009 14.0387 8.00222 13.9616 8.39018C13.8844 8.77814 13.6939 9.13451 13.4142 9.41421C13.1345 9.69392 12.7781 9.8844 12.3902 9.96157C12.0022 10.0387 11.6001 9.99913 11.2346 9.84776C10.8692 9.6964 10.5568 9.44004 10.3371 9.11114C10.1173 8.78224 10 8.39556 10 8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6ZM14 18H10V10H14V18Z" fill="currentColor"/>`,
    delay: 200,
  },
  {
    id: "innovation",
    icon: `<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    delay: 300,
  },
  {
    id: "trust",
    icon: `<path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    delay: 400,
  },
  {
    id: "impact",
    icon: `<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    delay: 500,
  },
  {
    id: "scalability",
    icon: `<path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    delay: 600,
  },
  {
    id: "collaboration",
    icon: `<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    delay: 700,
  },
]
</script>

<template>
  <section class="sm:py-[100px] py-[60px] container">
    <div class="about-cards-container">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2
          class="text-3xl sm:text-4xl font-semibold leading-[44px] text-white mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {{ $t("aboutUsCards.title") }}
        </h2>
        <p
          class="text-[#A3A3A3] text-lg sm:text-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {{ $t("aboutUsCards.subtitle") }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="cards-grid">
        <div
          v-for="card in cards"
          :key="card.id"
          class="about-card"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="card.delay"
        >
          <div class="icon-wrapper">
            <svg
              class="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="card.icon"
            ></svg>
          </div>
          <h3 class="card-title">
            {{ $t(`aboutUsCards.${card.id}.title`) }}
          </h3>
          <p class="card-description">
            {{ $t(`aboutUsCards.${card.id}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

/* About Card */
.about-card {
  background: #1b0442;
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.about-card:hover {
  transform: translateY(-4px);
  border-color: rgba(139, 92, 246, 0.4);
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
}

.about-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.03) 0%,
    rgba(124, 58, 237, 0.03) 100%
  );
  z-index: 0;
  pointer-events: none;
}

/* Icon Wrapper */
.icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(107, 70, 193, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.icon {
  color: #a78bfa;
  width: 28px;
  height: 28px;
}

/* Card Title */
.card-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: white;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;
}

/* Card Description */
.card-description {
  font-size: 16px;
  line-height: 24px;
  color: #a3a3a3;
  position: relative;
  z-index: 1;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .about-cards-section {
    padding: 40px 16px;
  }

  .about-card {
    padding: 28px 24px;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    margin-bottom: 20px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .about-cards-section {
    padding: 30px 12px;
  }

  .about-card {
    padding: 24px 20px;
    border-radius: 16px;
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
  }

  .icon {
    width: 22px;
    height: 22px;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .card-description {
    font-size: 0.9rem;
  }
}
</style>
