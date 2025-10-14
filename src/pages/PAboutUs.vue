<script setup lang="ts"></script>

<template>
  <div class="py-12 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ $t("aboutUs.title") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t("aboutUs.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ $t("aboutUs.mission") }}
          </h2>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("aboutUs.missionText") }}
          </p>
        </div>

        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ $t("aboutUs.vision") }}
          </h2>
          <p class="text-gray-600 leading-relaxed">
            {{ $t("aboutUs.visionText") }}
          </p>
        </div>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-md mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
          {{ $t("aboutUs.values") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-3xl">💡</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ $t("aboutUs.innovation") }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ $t("aboutUs.innovationText") }}
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-3xl">🤝</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ $t("aboutUs.collaboration") }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ $t("aboutUs.collaborationText") }}
            </p>
          </div>

          <div class="text-center">
            <div
              class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span class="text-3xl">⭐</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              {{ $t("aboutUs.excellence") }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ $t("aboutUs.excellenceText") }}
            </p>
          </div>
        </div>
      </div>

      <div class="bg-blue-600 text-white p-12 rounded-lg text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t("aboutUs.joinUs") }}</h2>
        <p class="text-xl mb-6">{{ $t("aboutUs.joinUsText") }}</p>
        <RouterLink
          to="/developers"
          class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {{ $t("aboutUs.meetTeam") }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
