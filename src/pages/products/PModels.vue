<script setup lang="ts"></script>

<template>
  <div class="py-12 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          {{ $t("models.title") }}
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t("models.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="flex items-start gap-4 mb-4">
            <div class="text-4xl">🧠</div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ $t("models.gpt4") }}
              </h3>
              <p class="text-sm text-blue-600 font-medium">
                {{ $t("models.gpt4Category") }}
              </p>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{ $t("models.gpt4Desc") }}
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold text-gray-900 mb-2">
              {{ $t("models.capabilities") }}
            </h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>✓ {{ $t("models.textGeneration") }}</li>
              <li>✓ {{ $t("models.translation") }}</li>
              <li>✓ {{ $t("models.sentiment") }}</li>
              <li>✓ {{ $t("models.qa") }}</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="flex items-start gap-4 mb-4">
            <div class="text-4xl">🖼️</div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ $t("models.vision") }}
              </h3>
              <p class="text-sm text-blue-600 font-medium">
                {{ $t("models.visionCategory") }}
              </p>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{ $t("models.visionDesc") }}
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold text-gray-900 mb-2">
              {{ $t("models.capabilities") }}
            </h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>✓ {{ $t("models.objectDetection") }}</li>
              <li>✓ {{ $t("models.imageClassification") }}</li>
              <li>✓ {{ $t("models.facialRecognition") }}</li>
              <li>✓ {{ $t("models.sceneUnderstanding") }}</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="flex items-start gap-4 mb-4">
            <div class="text-4xl">🎯</div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ $t("models.recommendation") }}
              </h3>
              <p class="text-sm text-blue-600 font-medium">
                {{ $t("models.recommendationCategory") }}
              </p>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{ $t("models.recommendationDesc") }}
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold text-gray-900 mb-2">
              {{ $t("models.capabilities") }}
            </h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>✓ {{ $t("models.productRecommendations") }}</li>
              <li>✓ {{ $t("models.contentPersonalization") }}</li>
              <li>✓ {{ $t("models.userBehavior") }}</li>
              <li>✓ {{ $t("models.abTesting") }}</li>
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-8">
          <div class="flex items-start gap-4 mb-4">
            <div class="text-4xl">🔮</div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                {{ $t("models.predictive") }}
              </h3>
              <p class="text-sm text-blue-600 font-medium">
                {{ $t("models.predictiveCategory") }}
              </p>
            </div>
          </div>
          <p class="text-gray-600 mb-4">
            {{ $t("models.predictiveDesc") }}
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold text-gray-900 mb-2">
              {{ $t("models.capabilities") }}
            </h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>✓ {{ $t("models.timeSeriesForecasting") }}</li>
              <li>✓ {{ $t("models.demandPrediction") }}</li>
              <li>✓ {{ $t("models.riskAssessment") }}</li>
              <li>✓ {{ $t("models.anomalyDetection") }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
