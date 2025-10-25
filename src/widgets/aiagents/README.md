# AI Agents Widget

## Overview

The AI Agents widget displays a showcase of AI-powered agents in a responsive grid layout. It features beautiful card designs with hover effects, images, and call-to-action buttons.

## Features

- **Responsive Grid Layout**: 3 columns on large screens (top row), 2 columns centered (bottom row), 2 columns on medium screens, 1 column on mobile
- **Hover Effects**: Cards lift up and images scale on hover for enhanced interactivity
- **Video Indicator**: Optional play button overlay for video content
- **Internationalization**: Full i18n support for all text content
- **Smooth Animations**: AOS (Animate On Scroll) integration for entrance animations

## Usage

```vue
<script setup lang="ts">
import { CAiAgents } from "@/widgets"
</script>

<template>
  <CAiAgents />
</template>
```

## Translation Keys

The widget uses the following i18n keys:

```json
{
  "aiAgents": {
    "titlePart1": "Meet Our",
    "titlePart2": "AI Agents",
    "subtitle": "Discover powerful AI agents...",
    "card1": {
      "title": "Card Title",
      "description": "Card description"
    },
    // ... card2 through card5
    "explore": "Explore",
    "seeMore": "See more"
  }
}
```

## Component Structure

- `CAiAgents.vue` - Main component with grid layout and card designs
- `index.ts` - Export file

## Responsive Breakpoints

- Mobile (< 768px): Single column layout
- Tablet (768px - 1024px): 2 columns
- Desktop (> 1024px): 3 columns (top row), 2 columns centered (bottom row)

## Styling

The component uses Tailwind CSS for styling with custom hover effects and transitions. Cards have a dark background (#1a1a1a) on a dark page background (#0e041f).
