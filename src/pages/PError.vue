<script setup lang="ts">
import { useRouter } from "vue-router"
import { CButton } from "@/shared/ui"
import CHeader from "@/widgets/header/ui/CHeader.vue"

const router = useRouter()

const goHome = () => {
  router.push("/")
}
</script>

<template>
  <div class="min-h-screen custom-class flex items-center px-4 py-16">
    <CHeader
      class="absolute top-0 left-0 right-0 z-50 bg-transparent bg-none header-class"
    />
    <div class="container">
      <!-- 404 Number -->
      <h1
        class="text-[150px] md:text-[200px] font-extrabold leading-none bg-gradient-to-r from-primary-60 to-primary-80 bg-clip-text text-transparent"
      >
        {{ $t("error.404") }}
      </h1>

      <!-- Error Message -->
      <h2 class="text-3xl md:text-4xl font-bold text-white mt-8 mb-6">
        {{ $t("error.pageNotFound") }}
      </h2>

      <p class="text-lg text-secondary-60 mb-12 max-w-[418px]">
        {{ $t("error.message") }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <CButton
          :label="$t('error.goBackHome')"
          variant="primary"
          size="large"
          class="w-[411px] h-12 font-semibold"
          @click="goHome"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-class {
  background: url("@/shared/assets/png/404.jpg") no-repeat center center;
  background-color: #000000;
  background-size: contain;
  background-position: right center;
}

.header-class::before {
  background: none !important;
}
</style>
