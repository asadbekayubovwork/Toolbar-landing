# CBlogCards Component Usage

## Import and Use

```vue
<script setup lang="ts">
import { CBlogCards } from "@/widgets/blogcards"
</script>

<template>
  <CBlogCards />
</template>
```

## Features

✅ Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
✅ Smooth hover animations on images and arrows
✅ AOS (Animate On Scroll) integration
✅ Full i18n support (English, Russian, Uzbek)
✅ Modern dark theme design
✅ SEO-friendly semantic HTML

## Example in PIndex.vue

```vue
<script setup lang="ts">
import {
  CHero,
  WhyChooseUs,
  CAiAgents,
  CAiModels,
  CLandingIntro,
  CCallToAction,
  CBlogCards, // Import the component
} from "@/widgets"
</script>

<template>
  <div>
    <CHero />
    <WhyChooseUs />
    <CAiAgents />
    <CAiModels />
    <CBlogCards />
    <!-- Add to your page -->
    <CLandingIntro />
    <CCallToAction />
  </div>
</template>
```

## Customization

To customize the blog cards data, edit the `blogCards` array in `src/widgets/blogcards/ui/CBlogCards.vue`:

```typescript
const blogCards: BlogCard[] = [
  {
    id: 1,
    image: "path/to/image.jpg",
    author: "Author Name",
    date: "19 Jan 2024",
    title: "blog.card1.title", // Translation key
    description: "blog.card1.description", // Translation key
    link: "/blog/post-slug",
  },
  // ... more cards
]
```

## Translations

Add or modify translations in:

- `src/shared/config/i18n/en.json` (English)
- `src/shared/config/i18n/ru.json` (Russian)
- `src/shared/config/i18n/uz.json` (Uzbek)

Structure:

```json
{
  "blog": {
    "title": "The latest writings from our team",
    "subtitle": "The latest industry news, interviews...",
    "card1": {
      "title": "Blog post title",
      "description": "Blog post description"
    }
  }
}
```

## Styling

The component uses:

- Dark background (`#0e041f`)
- Purple accent color (`#7C3AED`) for author/date
- Gradient blur background effect
- Tailwind CSS classes for responsive design
- Custom hover effects with transitions
