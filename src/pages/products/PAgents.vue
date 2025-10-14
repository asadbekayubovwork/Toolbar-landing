<script setup lang="ts"></script>

<template>
  <div class="py-12 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ $t("agents.title") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t("agents.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
        >
          <div class="text-5xl mb-4">🤖</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ $t("agents.customerSupport") }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ $t("agents.customerSupportDesc") }}
          </p>
          <button
            class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {{ $t("agents.learnMore") }}
          </button>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
        >
          <div class="text-5xl mb-4">📊</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ $t("agents.dataAnalysis") }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ $t("agents.dataAnalysisDesc") }}
          </p>
          <button
            class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {{ $t("agents.learnMore") }}
          </button>
        </div>

        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
        >
          <div class="text-5xl mb-4">✍️</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ $t("agents.contentWriting") }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ $t("agents.contentWritingDesc") }}
          </p>
          <button
            class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {{ $t("agents.learnMore") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
