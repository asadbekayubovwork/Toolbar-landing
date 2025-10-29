<script setup lang="ts">
import BlogCard from "./BlogCard.vue"

interface BlogCardData {
  id: number
  image: string
  author: string
  date: string
  title: string
  description: string
  link: string
}

// Blog cards data - you can replace these with actual blog images
const blogCards: BlogCardData[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=350&fit=crop",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    title: "blog.card1.title",
    description: "blog.card1.description",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=350&fit=crop",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    title: "blog.card2.title",
    description: "blog.card2.description",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=350&fit=crop",
    author: "Alec Whitten",
    date: "17 Jan 2024",
    title: "blog.card3.title",
    description: "blog.card3.description",
    link: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&h=350&fit=crop",
    author: "Demi Wilkinson",
    date: "16 Jan 2024",
    title: "blog.card4.title",
    description: "blog.card4.description",
    link: "#",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&h=350&fit=crop",
    author: "Candice Wu",
    date: "15 Jan 2024",
    title: "blog.card5.title",
    description: "blog.card5.description",
    link: "#",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=350&fit=crop",
    author: "Natali Craig",
    date: "14 Jan 2024",
    title: "blog.card6.title",
    description: "blog.card6.description",
    link: "#",
  },
]
</script>

<template>
  <section
    class="blogCardsSection relative sm:py-[100px] py-[60px] overflow-hidden"
  >
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2
          class="text-3xl sm:text-5xl font-bold text-white mb-4 leading-[140%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {{ $t("blog.title") }}
        </h2>
        <p
          class="font-normal text-center text-[#E5E5E5] mx-auto text-base sm:text-lg leading-[140%] max-w-[700px] w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {{ $t("blog.subtitle") }}
        </p>
      </div>

      <!-- Blog Cards Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <BlogCard
          v-for="(card, index) in blogCards"
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
  </section>
</template>

<style scoped>
.blogCardsSection {
  position: relative;
  background: #0e041f;
  overflow: hidden;
}

.blogCardsSection::before {
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

.container {
  position: relative;
  z-index: 1;
}
</style>
