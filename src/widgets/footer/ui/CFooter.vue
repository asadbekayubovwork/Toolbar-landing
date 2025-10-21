<script setup lang="ts">
const currentYear = new Date().getFullYear()

console.log("Footer Mounted ------------------------")
</script>

<template>
  <footer class="bg-[#080808] text-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t("footer.about") }}</h3>
          <p class="text-gray-300 text-sm">
            {{ $t("footer.aboutText") }}
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">
            {{ $t("footer.quickLinks") }}
          </h3>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/"
                class="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {{ $t("footer.home") }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                class="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {{ $t("footer.aboutUs") }}
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/developers"
                class="text-gray-300 hover:text-white text-sm transition-colors"
              >
                {{ $t("footer.developers") }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t("footer.contact") }}</h3>
          <p class="text-gray-300 text-sm">
            {{ $t("footer.contactEmail") }}<br />
            {{ $t("footer.contactPhone") }}
          </p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center">
        <p class="text-gray-400 text-sm">
          {{ $t("footer.copyright", { year: currentYear }) }}
        </p>
      </div>
    </div>
  </footer>
</template>
