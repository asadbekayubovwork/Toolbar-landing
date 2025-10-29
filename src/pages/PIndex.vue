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
import CPricingList from "@/widgets/pricing/ui/CPricingList.vue"
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
    <CPricingList />
    <CCallToAction />
    <CContact />
  </div>
</template>
