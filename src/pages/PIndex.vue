<script setup lang="ts">
import {
  CHero,
  WhyChooseUs,
  CAiAgents,
  CCallToAction,
  CLandingIntro,
  CAiModels,
} from "@/widgets"
import CBlogCards from "@/widgets/blogcards/ui/CBlogCards.vue"
import CContact from "@/widgets/contact/ui/CContact.vue"
</script>

<template>
  <div>
    <!-- Hero Section -->
    <CHero />
    <WhyChooseUs />
    <CLandingIntro />
    <CAiAgents />
    <CAiModels />
    <CBlogCards />
    <CCallToAction />
    <CContact />
  </div>
</template>
