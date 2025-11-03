<script setup lang="ts">
import { ref } from "vue"

const formData = ref({
  fullName: "",
  email: "",
  phone: "",
  message: "",
})

const handleSubmit = () => {
  console.log("Form submitted:", formData.value)
  // Add your form submission logic here
}
</script>

<template>
  <section
    class="contact-section sm:py-[100px] py-[60px] sm:px-[100px] px-[20px]"
  >
    <div class="contact-container">
      <!-- Left Side - Form -->
      <div class="form-wrapper" data-aos="fade-right" data-aos-duration="1000">
        <h2
          class="title text-3xl sm:text-5xl font-bold text-white mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {{ $t("contact.title") }}
        </h2>
        <p
          class="subtitle text-gray-300 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {{ $t("contact.subtitle") }}
        </p>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <!-- Full Name -->
          <div class="form-group">
            <label class="form-label text-white text-sm mb-2 block">
              {{ $t("contact.fullName") }}
            </label>
            <input
              v-model="formData.fullName"
              type="text"
              :placeholder="$t('contact.fullNamePlaceholder')"
              class="form-input"
              required
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label class="form-label text-white text-sm mb-2 block">
              {{ $t("contact.email") }}
            </label>
            <input
              v-model="formData.email"
              type="email"
              :placeholder="$t('contact.emailPlaceholder')"
              class="form-input"
              required
            />
          </div>

          <!-- Phone Number -->
          <div class="form-group">
            <label class="form-label text-white text-sm mb-2 block">
              {{ $t("contact.phoneNumber") }}
            </label>
            <input
              v-model="formData.phone"
              type="tel"
              :placeholder="$t('contact.phoneNumberPlaceholder')"
              class="form-input"
              required
            />
          </div>

          <!-- Message -->
          <div class="form-group">
            <label class="form-label text-white text-sm mb-2 block">
              {{ $t("contact.message") }}
            </label>
            <textarea
              v-model="formData.message"
              :placeholder="$t('contact.messagePlaceholder')"
              class="form-input form-textarea"
              rows="5"
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-button">
            {{ $t("contact.send") }}
          </button>
        </form>
      </div>

      <!-- Right Side - Image -->
      <div class="image-wrapper" data-aos="fade-left" data-aos-duration="1000">
        <div class="image-container">
          <img
            src="@/shared/assets/png/contact-img.jpg"
            alt="Contact"
            class="contact-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.contact-section::before {
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

.contact-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: start;
}

@media (min-width: 768px) {
  .contact-container {
    gap: 60px;
  }
}

@media (min-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
}

.form-wrapper {
  width: 100%;
}

.title {
  line-height: 1.2;
}

.subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  background: rgba(30, 20, 50, 0.6);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus {
  border-color: rgba(139, 92, 246, 0.6);
  background: rgba(30, 20, 50, 0.8);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.submit-button {
  width: 100%;
  padding: 16px 32px;
  background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}

.submit-button:active {
  transform: translateY(0);
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: 100%;
  height: 100%;
  max-width: 732px;
  aspect-ratio: 4 / 3;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  position: relative;
  margin: 0 auto;
}

.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.1) 0%,
    rgba(124, 58, 237, 0.1) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.contact-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .contact-container {
    gap: 40px;
  }

  .image-container {
    max-width: 100%;
    aspect-ratio: 16 / 10;
  }
}

@media (max-width: 767px) {
  .contact-section {
    padding: 40px 16px;
  }

  .title {
    font-size: 2rem;
    line-height: 1.3;
  }

  .subtitle {
    font-size: 1rem;
    line-height: 1.5;
  }

  .form-input {
    padding: 14px 18px;
    font-size: 0.95rem;
  }

  .submit-button {
    font-size: 1rem;
    padding: 14px 28px;
  }

  .image-container {
    aspect-ratio: 16 / 10;
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 30px 12px;
  }

  .title {
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 0.95rem;
  }

  .form-input {
    padding: 12px 16px;
    font-size: 0.9rem;
  }

  .submit-button {
    font-size: 0.95rem;
    padding: 12px 24px;
  }

  .image-container {
    aspect-ratio: 4 / 3;
    border-radius: 12px;
  }
}
</style>
