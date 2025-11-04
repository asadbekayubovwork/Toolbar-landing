<script setup lang="ts">
import { useHead } from "@vueuse/head"
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

// SEO Meta Tags
useHead({
  title: "Toolbar AI - Smart AI-Powered Browser Toolbar | Google Toolbar Alternative",
  meta: [
    {
      name: "description",
      content:
        "Discover Toolbar AI - The next-generation intelligent browser toolbar powered by artificial intelligence. Best alternative to Google Toolbar with advanced AI features, smart automation, and productivity tools. Transform your browsing experience with AI agents and models.",
    },
    {
      name: "keywords",
      content:
        "toolbar AI, AI toolbar, google toolbar, browser toolbar, smart toolbar, AI browser extension, intelligent toolbar, AI-powered toolbar, productivity toolbar, AI assistant toolbar, artificial intelligence toolbar, toolbar with AI, google toolbar alternative, AI browser tools, smart browser toolbar, automated toolbar, AI automation toolbar, AI agents toolbar, AI models toolbar, machine learning toolbar, neural toolbar, GPT toolbar, ChatGPT toolbar, AI productivity tools, intelligent browser extension, AI-enhanced browsing, smart browsing tools, AI web tools, toolbar extension, browser AI assistant, AI navigation toolbar, context-aware toolbar, AI search toolbar, intelligent search bar, AI-powered search, smart search toolbar, browser automation, AI workflow toolbar, productivity extension, AI-powered browser, smart web assistant, AI browser helper",
    },
    // Open Graph Tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://toolbar-ai.com/" },
    {
      property: "og:title",
      content: "Toolbar AI - Smart AI-Powered Browser Toolbar",
    },
    {
      property: "og:description",
      content:
        "Experience the future of browsing with Toolbar AI. Advanced AI-powered toolbar with intelligent agents, automation, and productivity features. The best Google Toolbar alternative.",
    },
    { property: "og:image", content: "https://toolbar-ai.com/og-image.jpg" },
    { property: "og:site_name", content: "Toolbar AI" },
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@toolbarai" },
    {
      name: "twitter:title",
      content: "Toolbar AI - Smart AI-Powered Browser Toolbar",
    },
    {
      name: "twitter:description",
      content:
        "Transform your browsing with AI. Intelligent toolbar featuring AI agents, automation, and advanced productivity tools.",
    },
    { name: "twitter:image", content: "https://toolbar-ai.com/twitter-card.jpg" },
    // Additional SEO Tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Toolbar AI Team" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    { name: "theme-color", content: "#6633EE" },
    // Mobile Optimization
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    {
      name: "apple-mobile-web-app-title",
      content: "Toolbar AI",
    },
  ],
  link: [
    { rel: "canonical", href: "https://toolbar-ai.com/" },
  ],
})
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
