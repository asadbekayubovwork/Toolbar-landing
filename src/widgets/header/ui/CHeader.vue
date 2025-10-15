<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router"
import { ref, onMounted, onUnmounted, watch } from "vue"
import CHeaderDropdown from "./CHeaderDropdown.vue"
import CLanguageSwitcher from "./CLanguageSwitcher.vue"
import Menu from "@/shared/assets/icons/menu.svg"
import Logo from "@/shared/assets/svg/dark-logo.svg"

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isProductsDropdownOpen = ref(false)

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

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isProductsDropdownOpen.value = false
}

const toggleProductsDropdown = () => {
  isProductsDropdownOpen.value = !isProductsDropdownOpen.value
}

// Prevent body scroll when mobile menu is open
const toggleBodyScroll = (isOpen: boolean) => {
  if (isOpen) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
}

// Watch for mobile menu state changes
watch(isMobileMenuOpen, (isOpen) => {
  toggleBodyScroll(isOpen)
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
  document.body.style.overflow = "auto"
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
          <button class="lg:hidden" @click="toggleMobileMenu">
            <Menu />
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Navigation Overlay -->
  <Transition name="mobile-menu">
    <div
      v-if="isMobileMenuOpen"
      class="mobile-menu-overlay"
      @click="closeMobileMenu"
    >
      <div class="mobile-menu" @click.stop>
        <!-- Mobile Menu Header -->
        <div class="mobile-menu-header">
          <RouterLink to="/" @click="closeMobileMenu">
            <Logo class="h-8" />
          </RouterLink>
          <button @click="closeMobileMenu" class="mobile-menu-close">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation Links -->
        <nav class="mobile-nav">
          <RouterLink
            to="/"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.path === '/' }"
            @click="closeMobileMenu"
          >
            {{ $t("header.home") }}
          </RouterLink>

          <!-- Products Dropdown -->
          <div class="mobile-products-section">
            <button
              @click="toggleProductsDropdown"
              class="mobile-nav-link mobile-nav-dropdown-toggle"
              :class="{ 'mobile-nav-link-active': isProductsActive() }"
            >
              {{ $t("header.products") }}
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': isProductsDropdownOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <Transition name="mobile-dropdown">
              <div
                v-if="isProductsDropdownOpen"
                class="mobile-products-dropdown"
              >
                <RouterLink
                  v-for="item in productsDropdown"
                  :key="item.path"
                  :to="item.path"
                  class="mobile-nav-sub-link"
                  @click="closeMobileMenu"
                >
                  {{ $t(item.i18nKey!) }}
                </RouterLink>
              </div>
            </Transition>
          </div>

          <RouterLink
            v-for="item in navigation.slice(1)"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            :class="{ 'mobile-nav-link-active': $route.path === item.path }"
            @click="closeMobileMenu"
          >
            {{ $t(item.i18nKey) }}
          </RouterLink>
        </nav>

        <!-- Mobile Language Switcher -->
        <div class="mobile-language-section">
          <CLanguageSwitcher />
        </div>

        <!-- Mobile Login Button -->
        <div class="mobile-login-section">
          <a
            href="https://space.toolbar-ai.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="mobile-login-btn"
            @click="closeMobileMenu"
          >
            {{ $t("header.login") }}
          </a>
        </div>
      </div>
    </div>
  </Transition>
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

/* Mobile Navigation Styles */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(4px);
  transition: backdrop-filter 0.3s ease;
}

.mobile-menu {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  max-width: 80vw;
  background: #0e041f;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu-close {
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.mobile-menu-close:hover {
  background: #f0f0f0;
}

.mobile-menu-close svg {
  color: #000;
}

.mobile-nav {
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav-link:hover {
  background: rgba(103, 51, 238, 0.1);
  color: #6633ee;
}

.mobile-nav-link-active {
  background: rgba(103, 51, 238, 0.2);
  color: #6633ee;
  border-left: 3px solid #6633ee;
}

.mobile-nav-dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mobile-products-dropdown {
  background: rgba(0, 0, 0, 0.2);
}

.mobile-nav-sub-link {
  display: block;
  padding: 0.75rem 3rem;
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
}

.mobile-nav-sub-link:hover {
  background: rgba(103, 51, 238, 0.1);
  color: #6633ee;
}

.mobile-language-section {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-login-section {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-login-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: #6633ee;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  transition: background-color 0.2s;
}

.mobile-login-btn:hover {
  background: #5a2dd1;
}

/* Mobile Menu Transitions */
.mobile-menu-enter-active {
  transition: opacity 0.3s ease 0.1s;
}

.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-active .mobile-menu {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.mobile-menu-leave-active .mobile-menu {
  transition: transform 0.2s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}

.mobile-menu-enter-from {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu {
  transform: translateX(-100%);
}

.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-leave-to .mobile-menu {
  transform: translateX(-100%);
}

/* Mobile Dropdown Transitions */
.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
