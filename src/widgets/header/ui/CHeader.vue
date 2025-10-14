<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { ref, onMounted, onUnmounted } from "vue"
import CHeaderDropdown from "./CHeaderDropdown.vue"
import CLanguageSwitcher from "./CLanguageSwitcher.vue"
import Menu from "@/shared/assets/icons/menu.svg"
import Logo from "@/shared/assets/svg/dark-logo.svg"

const route = useRoute()
const isScrolled = ref(false)

const navigation = [
  { name: "Home", path: "/", i18nKey: "header.home" },
  { name: "About us", path: "/about", i18nKey: "header.aboutUs" },
  { name: "Developers", path: "/developers", i18nKey: "header.developers" },
  { name: "Pricing", path: "/pricing", i18nKey: "header.pricing" },
  { name: "Contact us", path: "/contact-us", i18nKey: "header.contactUs" },
]

const productsDropdown = [
  {
    name: "Agents",
    path: "/products/agents",
    description: "AI-powered agents",
    i18nKey: "header.agents",
  },
  {
    name: "Models",
    path: "/products/models",
    description: "Machine learning models",
    i18nKey: "header.models",
  },
]

const isProductsActive = () => {
  return route.path.startsWith("/products")
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <header
    class="header"
    :class="{
      'header-scrolled bg-[#0e041f] bg-opacity-50 backdrop-blur-2xl':
        isScrolled,
    }"
  >
    <div class="container">
      <div class="py-3 sm:py-6">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <RouterLink to="/">
            <Logo class="h-8 md:h-10" />
          </RouterLink>
          <!-- Navigation Links -->
          <nav class="lg:flex hidden gap-8 items-center">
            <RouterLink
              to="/"
              class="text-white font-normal hover:text-[#737373] transition-200"
              :class="{ 'text-[#6633EE]': $route.path === '/' }"
            >
              {{ $t("header.home") }}
            </RouterLink>

            <CHeaderDropdown
              :title="$t('header.products')"
              :items="productsDropdown"
              :is-active="isProductsActive()"
            />

            <RouterLink
              v-for="item in navigation.slice(1)"
              :key="item.path"
              :to="item.path"
              class="text-white font-normal hover:text-[#737373] transition-200"
              :class="{ 'text-[#6633EE]': $route.path === item.path }"
            >
              {{ $t(item.i18nKey) }}
            </RouterLink>
          </nav>
          <!-- Header Actions -->
          <div class="lg:flex hidden gap-8 items-center">
            <CLanguageSwitcher />
            <a
              href="https://space.toolbar-ai.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-[160px] h-[40px] bg-[#6633EE] hover:bg-[#6633EE]/80 transition-colors flex items-center justify-center rounded-xl text-white font-medium"
            >
              {{ $t("header.login") }}
            </a>
          </div>
          <button class="lg:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  position: sticky;
  top: 0;
  background: #0e041f;
  z-index: 100;
}

.header::before {
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
  transition: opacity 0.3s ease-in-out;
}

.header-scrolled::before {
  opacity: 0;
}
</style>
