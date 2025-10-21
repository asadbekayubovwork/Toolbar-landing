<script setup lang="ts">
import { ref } from "vue"

const email = ref("")

const handleSubscribe = () => {
  if (email.value) {
    console.log("Subscribing email:", email.value)
    email.value = ""
  }
}
</script>

<template>
  <section class="newsletter-section py-16 md:py-20 lg:py-24 text-center">
    <div class="container">
      <h2
        class="text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-5 leading-[44px]"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        {{ $t("callToAction.title") }}
      </h2>

      <p
        class="font-normal text-lg lg:text-xl sm:text-[#EAECF0] text-[#A3A3A3] mb-8 md:mb-10 sm:leading-[30px] leading-7"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        {{ $t("callToAction.subtitle") }}
      </p>

      <form
        @submit.prevent="handleSubscribe"
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="500"
      >
        <input
          v-model="email"
          type="email"
          required
          :placeholder="$t('callToAction.emailPlaceholder')"
          class="w-full sm:max-w-[360px] h-12 px-3 bg-transparent rounded-xl border border-[#737373] text-white placeholder-[#a3a3a3] outline-none focus:border-[#6633EE] transition-200"
        />

        <button
          type="submit"
          class="w-full sm:w-[119px] h-[48px] bg-[#6633EE] hover:bg-[#6633EE]/70 transition-300 flex items-center justify-center rounded-xl text-white font-medium"
        >
          {{ $t("callToAction.subscribe") }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.newsletter-section {
  background: #190737;
}

button:hover {
  box-shadow: 0 8px 20px rgba(102, 51, 238, 0.3);
}
</style>
