<script setup lang="ts">
interface Props {
  image: string
  author: string
  date: string
  title: string
  description: string
  link: string
  aosDelay?: number
}

withDefaults(defineProps<Props>(), {
  aosDelay: 0,
})
</script>

<template>
  <a
    :href="link"
    class="group block"
    data-aos="fade-up"
    data-aos-duration="1000"
    :data-aos-delay="aosDelay"
  >
    <article class="h-full flex flex-col">
      <!-- Image Container -->
      <div class="relative overflow-hidden rounded-2xl mb-6 h-[240px]">
        <img
          :src="image"
          :alt="$t(title)"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <!-- Content -->
      <div class="flex flex-col flex-1">
        <!-- Author and Date -->
        <p class="text-[#7C3AED] text-sm sm:text-base font-medium mb-3">
          {{ author }} • {{ date }}
        </p>

        <!-- Title with Arrow -->
        <div class="flex items-start justify-between gap-3 mb-3">
          <h3
            class="text-xl sm:text-2xl font-bold text-white leading-[140%] flex-1"
          >
            {{ $t(title) }}
          </h3>
          <svg
            class="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <!-- Description -->
        <p class="text-[#737373] text-sm sm:text-base leading-[140%]">
          {{ $t(description) }}
        </p>
      </div>
    </article>
  </a>
</template>
