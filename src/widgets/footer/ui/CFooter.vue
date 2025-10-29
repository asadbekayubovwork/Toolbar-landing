<script setup lang="ts">
const currentYear = new Date().getFullYear()
import Logo from "@/shared/assets/svg/light-logo.svg"
</script>

<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto py-8 sm:py-10">
      <!-- Top Section -->
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 border-gray-800"
      >
        <!-- Left Column - Logo and Contact Info -->
        <div class="">
          <!-- Logo -->
          <RouterLink to="/">
            <Logo class="h-8 md:h-10" />
          </RouterLink>

          <!-- Contact Information -->
          <div class="space-y-1 text-white mt-8 sm:mt-4 mb-8 sm:mb-10">
            <p class="text-base leading-[140%] font-normal">
              {{ $t("footer.phone") }}
            </p>
            <p class="text-base leading-[140%] font-normal">
              {{ $t("footer.email") }}
            </p>
          </div>

          <!-- Social Media Icons -->
          <div class="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors duration-300"
              aria-label="Telegram"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.036.307.02.473z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Column - Navigation Links -->
        <div class="grid grid-cols-2 gap-8 sm:gap-12">
          <!-- First Column -->
          <div class="space-y-1">
            <RouterLink
              to="/"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.home") }}
            </RouterLink>
            <RouterLink
              to="/products/agents"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.agents") }}
            </RouterLink>
            <RouterLink
              to="/products/models"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.models") }}
            </RouterLink>
            <RouterLink
              to="/developers"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.developers") }}
            </RouterLink>
            <RouterLink
              to="/pricing"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.pricing") }}
            </RouterLink>
          </div>

          <!-- Second Column -->
          <div class="space-y-1">
            <RouterLink
              to="/contact"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.contactUs") }}
            </RouterLink>
            <RouterLink
              to="/about"
              class="block text-gray-300 hover:text-white text-lg transition-colors duration-300"
            >
              {{ $t("footer.aboutUs") }}
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-row justify-between items-center gap-4 mt-10">
        <p class="text-[#8F8E8A] text-base">
          © {{ currentYear }} — {{ $t("footer.copyright") }}
        </p>
        <RouterLink
          to="/privacy"
          class="text-[#8F8E8A] hover:text-white text-base transition-colors duration-300"
        >
          {{ $t("footer.privacy") }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
