<script setup lang="ts">
import contactImg from "@/shared/assets/png/contact-img.jpg"
</script>

<template>
  <section class="about-story-section sm:py-[100px] py-[60px]">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {{ $t("aboutUsStory.title") }}
        </h2>
        <p
          class="text-[#A3A3A3] text-base sm:text-lg lg:text-xl max-w-4xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {{ $t("aboutUsStory.subtitle") }}
        </p>
      </div>

      <!-- Content Grid -->
      <div class="story-grid">
        <!-- Text Content -->
        <div
          class="text-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p class="paragraph">
            {{ $t("aboutUsStory.paragraph1") }}
          </p>
          <p class="paragraph">
            {{ $t("aboutUsStory.paragraph2") }}
          </p>
          <p class="paragraph">
            {{ $t("aboutUsStory.paragraph3") }}
          </p>
          <p class="paragraph">
            {{ $t("aboutUsStory.paragraph4") }}
          </p>
          <p class="paragraph">
            {{ $t("aboutUsStory.paragraph5") }}
          </p>
        </div>

        <!-- Image -->
        <div
          class="image-container"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="image-wrapper">
            <img
              :src="contactImg"
              alt="Toolbar AI Team"
              class="team-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Story Grid */
.story-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
}

/* Text Content */
.text-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.paragraph {
  font-size: 1rem;
  line-height: 1.7;
  color: #d4d4d4;
  font-weight: 400;
}

@media (min-width: 640px) {
  .paragraph {
    font-size: 1.0625rem;
  }
}

@media (min-width: 1024px) {
  .paragraph {
    font-size: 1.125rem;
  }
}

/* Image Container */
.image-container {
  position: relative;
  width: 100%;
}

.image-wrapper {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(102, 51, 238, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(102, 51, 238, 0.3);
}

.team-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 24px;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .story-grid {
    gap: 40px;
  }

  .text-content {
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .text-content {
    gap: 18px;
  }

  .paragraph {
    font-size: 0.9375rem;
  }

  .image-wrapper {
    border-radius: 16px;
  }

  .team-image {
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .story-grid {
    gap: 32px;
  }

  .text-content {
    gap: 16px;
  }

  .paragraph {
    font-size: 0.875rem;
    line-height: 1.6;
  }

  .image-wrapper {
    border-radius: 12px;
  }

  .team-image {
    border-radius: 12px;
  }
}
</style>
