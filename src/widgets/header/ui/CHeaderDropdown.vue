<script setup lang="ts">
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

interface DropdownItem {
  name: string
  path: string
  description?: string
  i18nKey?: string
}

interface Props {
  title: string
  items: DropdownItem[]
  isActive?: boolean
}

defineProps<Props>()

const isOpen = ref(false)

const openDropdown = () => {
  isOpen.value = true
}

const closeDropdown = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="relative" @mouseenter="openDropdown" @mouseleave="closeDropdown">
    <button
      class="text-white font-normal hover:text-[#737373] transition-200 flex items-center gap-1"
      :class="{ 'text-[#6633EE]': isActive }"
    >
      {{ title }}
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
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

    <Transition name="dropdown">
      <div v-if="isOpen" class="absolute top-full left-0 z-50 dropdown">
        <div
          class="w-[165px] bg-[#1C132C] mt-2 rounded-xl shadow-xl overflow-hidden"
        >
          <RouterLink
            v-for="item in items"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-3 text-xs text-[#FCFCFC] hover:bg-[#6633EE]/20 transition-colors"
            @click="closeDropdown"
          >
            <div class="font-medium">
              {{ item.i18nKey ? t(item.i18nKey) : item.name }}
            </div>
          </RouterLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown {
  box-shadow: 0px 2px 4px -2px #ffffff0f;
  /* box-shadow: 0px 4px 8px -2px #ffffff1a; */
}
</style>
