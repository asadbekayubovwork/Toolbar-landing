<template>
  <Teleport defer to="#header-actions">
    <div class="flex gap-4">
      <CButton
        :label="$t('export')"
        icon="icon-download-cloud"
        variant="secondary"
        class="px-6"
      />
      <CButton
        icon="icon-plus"
        variant="primary"
        class="px-6"
        :label="$t('add_employee')"
        @click="$emit('add')"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { CButton } from "@/shared/ui"

interface Emits {
  (e: "add"): void
}
defineEmits<Emits>()
</script>
