<script setup lang="ts">
import { useHead } from "@vueuse/head"
import BlogCard from "@/widgets/blogcards/ui/BlogCard.vue"
import CCallToAction from "@/widgets/calltoaction/ui/CCallToAction.vue"

// SEO Meta Tags
useHead({
  title: "Blog - Toolbar AI | AI Toolbar News, Tips & Industry Insights",
  meta: [
    {
      name: "description",
      content:
        "Stay updated with Toolbar AI blog. Discover the latest news, tips, tutorials, and insights about AI-powered browser toolbars, intelligent automation, productivity hacks, and AI technology trends. Learn how to maximize your browsing efficiency with our Google Toolbar alternative and AI tools.",
    },
    {
      name: "keywords",
      content:
        "toolbar AI blog, AI toolbar news, browser toolbar blog, AI productivity blog, toolbar tips, AI automation blog, intelligent toolbar insights, browser AI blog, toolbar AI articles, AI technology blog, productivity tips, browser automation blog, AI toolbar tutorials, smart toolbar blog, AI browser news, toolbar AI updates, AI productivity insights, browser tools blog, toolbar AI guides, AI automation tips, intelligent browsing blog, toolbar technology blog, AI tools blog, browser productivity blog, toolbar AI news, AI browser insights, smart automation blog, toolbar how-to, AI productivity articles",
    },
    // Open Graph Tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://toolbar-ai.com/blogs" },
    {
      property: "og:title",
      content: "Toolbar AI Blog - Latest News, Tips & Insights",
    },
    {
      property: "og:description",
      content:
        "Explore our blog for the latest updates, tutorials, and insights on AI-powered browser toolbars and productivity tools.",
    },
    { property: "og:image", content: "https://toolbar-ai.com/og-image-blog.jpg" },
    { property: "og:site_name", content: "Toolbar AI" },
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@toolbarai" },
    {
      name: "twitter:title",
      content: "Toolbar AI Blog - News, Tips & Insights",
    },
    {
      name: "twitter:description",
      content:
        "Stay updated with the latest in AI toolbar technology, productivity tips, and automation insights.",
    },
    {
      name: "twitter:image",
      content: "https://toolbar-ai.com/twitter-card-blog.jpg",
    },
    // Additional SEO Tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Toolbar AI Team" },
  ],
  link: [{ rel: "canonical", href: "https://toolbar-ai.com/blogs" }],
})

interface BlogCardData {
  id: number
  image: string
  author: string
  date: string
  title: string
  description: string
  link: string
}
const blogs: BlogCardData[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    link: "/blog/1",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=350&fit=crop",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    title: "blog.card2.title",
    description: "blog.card2.description",
    link: "/blog/2",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop",
    author: "Alec Whitten",
    date: "17 Jan 2024",
    title: "blog.card3.title",
    description: "blog.card3.description",
    link: "/blog/3",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=350&fit=crop",
    author: "Demi Wilkinson",
    date: "16 Jan 2024",
    title: "blog.card4.title",
    description: "blog.card4.description",
    link: "/blog/4",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=350&fit=crop",
    author: "Candice Wu",
    date: "15 Jan 2024",
    title: "blog.card5.title",
    description: "blog.card5.description",
    link: "/blog/5",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=350&fit=crop",
    author: "Natali Craig",
    date: "14 Jan 2024",
    title: "blog.card6.title",
    description: "blog.card6.description",
    link: "/blog/6",
  },
]
</script>

<template>
  <div>
    <section class="blogsSection relative h-[calc(100vh-88px)]">
      <div class="container text-center sm:mt-[238px] mt-[211px]">
        <h1
          class="font-bold text-[32px] sm:text-[56px] leading-[100%] mb-4 title h-[68px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <span class="text-white">{{ $t("blog.title") }}</span>
        </h1>
        <p
          class="text-base sm:text-xl text-[#A3A3A3] font-normal mb-8 leading-[140%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {{ $t("blog.subtitle") }}
        </p>
      </div>
    </section>
    <div class="blogs-bg-pattern">
      <div class="container sm:py-[100px] py-[60px]">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <BlogCard
            v-for="(card, index) in blogs"
            :key="card.id"
            :image="card.image"
            :author="card.author"
            :date="card.date"
            :title="card.title"
            :description="card.description"
            :link="card.link"
            :aos-delay="600 + index * 100"
          />
        </div>
      </div>
    </div>
    <CCallToAction />
  </div>
</template>

<style scoped>
.blogsSection {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.blogsSection::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/shared/assets/png/blur-bg.png");
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}
.blogsSection::after {
  content: "";
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 150%;
  background: radial-gradient(
    217.23% 100.08% at 50% 18.33%,
    rgba(0, 0, 0, 0) 21.67%,
    #6633ee 69.34%,
    #ffffff 100%
  );

  filter: blur(80px);
  z-index: 1;
  pointer-events: none;
}

.title {
  background: radial-gradient(
    ellipse at 50% 0%,
    #ffffff 0%,
    #a78bfa 30%,
    #6633ee 60%,
    #4c1d95 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blogs-bg-pattern {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}
.blogs-bg-pattern::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("@/shared/assets/png/blur-bg.png") no-repeat center center;
  background-size: cover;
  opacity: 0.05;
  z-index: 0;
  pointer-events: none;
}
</style>
