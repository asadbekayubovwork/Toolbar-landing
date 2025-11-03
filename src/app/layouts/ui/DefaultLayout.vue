<script setup lang="ts">
import { CHeader, CFooter, CCallToAgent } from "@/widgets"
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <CHeader />
    <main class="flex-1">
      <slot />
    </main>
    <CCallToAgent />
    <CFooter />
  </div>
</template>
