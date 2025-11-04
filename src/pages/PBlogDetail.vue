<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { useRoute } from "vue-router"

const route = useRoute()

const blogData = {
  publishedDate: "20 Jan 2024",
  title: "UX review presentations",
  subtitle:
    "How do you create compelling presentations that wow your colleagues and impress your managers?",
  tags: ["Design", "Research", "Presentation"],
  mainImage:
    "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
  author: {
    name: "Olivia Rhye",
    title: "Product Designer, Untitled",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
}

const copyLink = () => {
  const url = window.location.href
  navigator.clipboard.writeText(url)
  // You can add a toast notification here
}

// SEO Meta Tags
useHead({
  title: `${blogData.title} - Toolbar AI Blog`,
  meta: [
    {
      name: "description",
      content: blogData.subtitle,
    },
    {
      name: "keywords",
      content:
        `${blogData.tags.join(", ")}, toolbar AI, AI toolbar blog, browser toolbar article, AI productivity, intelligent toolbar, AI automation, browser AI`,
    },
    // Open Graph Tags
    { property: "og:type", content: "article" },
    { property: "og:url", content: `https://toolbar-ai.com/blog/${route.params.id}` },
    {
      property: "og:title",
      content: blogData.title,
    },
    {
      property: "og:description",
      content: blogData.subtitle,
    },
    { property: "og:image", content: blogData.mainImage },
    { property: "og:site_name", content: "Toolbar AI" },
    { property: "article:published_time", content: blogData.publishedDate },
    { property: "article:author", content: blogData.author.name },
    { property: "article:tag", content: blogData.tags.join(", ") },
    // Twitter Card Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@toolbarai" },
    {
      name: "twitter:title",
      content: blogData.title,
    },
    {
      name: "twitter:description",
      content: blogData.subtitle,
    },
    { name: "twitter:image", content: blogData.mainImage },
    { name: "twitter:creator", content: blogData.author.name },
    // Additional SEO Tags
    { name: "robots", content: "index, follow" },
    { name: "author", content: blogData.author.name },
  ],
  link: [{ rel: "canonical", href: `https://toolbar-ai.com/blog/${route.params.id}` }],
})
</script>

<template>
  <div class="blog-detail-page">
    <!-- Header Section -->
    <section class="blog-header-section">
      <div class="container">
        <div class="blog-header-content">
          <!-- Publication Date -->
          <p
            class="published-date"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ blogData.publishedDate }}
          </p>

          <!-- Main Title -->
          <h1
            class="main-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {{ blogData.title }}
          </h1>

          <!-- Subtitle -->
          <p
            class="subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {{ blogData.subtitle }}
          </p>

          <!-- Tags -->
          <div
            class="tags-container"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <span v-for="tag in blogData.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>

          <!-- Main Image -->
          <div
            class="main-image-container"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <img
              :src="blogData.mainImage"
              :alt="blogData.title"
              class="main-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="blog-content-section">
      <div class="container">
        <div class="content-wrapper">
          <!-- Introduction Section -->
          <section
            class="content-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              class="section-heading"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Introduction
            </h2>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
              nulla odio nisl vitae. In aliquet pellentesque aenean hac
              vestibulum turpis mi bibendum diam. Tempor integer aliquam in
              vitae malesuada fringilla.
            </p>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
              commodo consectetur convallis risus. Sed condimentum enim dignissim
              adipiscing faucibus consequat, urna. Viverra purus et erat auctor
              aliquam. Risus, volutpat vulputate posuere purus sit congue
              convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
              Mauris, neque ultricies eu vestibulum, bibendum quam lorem id.
              Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>

            <!-- Image with Caption -->
            <div
              class="image-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Business meeting"
                class="content-image"
              />
              <p class="image-caption">
                Image courtesy of
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="image-link"
                  >Fauxels via Pexels</a
                >
              </p>
            </div>

            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
              mauris id. Non pellentesque congue eget consectetur turpis.
              Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
              aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue
              felis elit erat nam nibh orci.
            </p>
          </section>

          <!-- Software and tools Section -->
          <section
            class="content-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              class="section-heading"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Software and tools
            </h2>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.
            </p>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
              quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
              risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
              aliquet sodales id est ac volutpat.
            </p>
          </section>

          <!-- Other resources Section -->
          <section
            class="content-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              class="section-heading"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Other resources
            </h2>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Sagittis et eu at elementum, quis in. Proin praesent volutpat
              egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
              Auctor rutrum lacus malesuada massa ornare et. Vulputate
              consectetur ac ultrices at diam dui eget fringilla tincidunt.
              Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
              quis auctor vulputate hac elementum gravida cursus dis.
            </p>

            <!-- Numbered List -->
            <ol
              class="numbered-list"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <li>
                Lectus id duis vitae porttitor enim gravida morbi.
              </li>
              <li>
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </li>
              <li>
                Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </li>
            </ol>
          </section>

          <!-- Additional Content with Image -->
          <section
            class="content-block"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              class="image-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
                alt="Designer working"
                class="content-image"
              />
              <p class="image-caption">
                Image courtesy of
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="image-link"
                  >Michael Burrows via Pexels</a
                >
              </p>
            </div>

            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Lectus leo massa amet posuere. Malesuada mattis non convallis
              quisque. Libero sit et imperdiet bibendum quisque dictum
              vestibulum in non. Pretium ultricies tempor non est diam. Enim ut
              enim amet amet integer cursus. Sit ac commodo pretium sed etiam
              turpis suspendisse at.
            </p>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Tristique odio senectus nam posuere ornare leo metus, ultricies.
              Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
              suscipit accumsan. Cursus viverra aenean magna risus elementum
              faucibus molestie pellentesque. Arcu ultricies sed mauris
              vestibulum.
            </p>
          </section>

          <!-- Conclusion Section -->
          <section
            class="conclusion-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2
              class="conclusion-heading"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Conclusion
            </h2>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
            </p>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
            </p>
            <p
              class="content-paragraph"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor.
            </p>
          </section>

          <!-- Author and Social Sharing Section -->
          <section
            class="author-social-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="author-info">
              <img
                :src="blogData.author.avatar"
                :alt="blogData.author.name"
                class="author-avatar"
              />
              <div class="author-details">
                <p class="author-name">{{ blogData.author.name }}</p>
                <p class="author-title">{{ blogData.author.title }}</p>
              </div>
            </div>
            <div class="social-sharing">
              <button @click="copyLink" class="copy-link-btn">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Copy link
              </button>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon-btn"
                aria-label="Twitter"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon-btn"
                aria-label="Facebook"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-detail-page {
  min-height: 100vh;
  background: #1a0033;
}

/* Header Section */
.blog-header-section {
  padding: 120px 0 80px;
  position: relative;
}

.blog-header-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.published-date {
  color: #9966ff;
  font-size: 14px;
  margin-bottom: 16px;
  font-weight: 400;
}

.main-title {
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.subtitle {
  color: #e5e5e5;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 32px;
  font-weight: 400;
}

.tags-container {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.tag {
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

.main-image-container {
  margin-top: 48px;
  border-radius: 12px;
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

/* Content Section */
.blog-content-section {
  padding: 80px 0;
  background: #1a0033;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.content-block {
  margin-bottom: 64px;
}

.section-heading {
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.3;
}

.content-paragraph {
  color: #ffffff;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 24px;
  font-weight: 400;
}

.image-block {
  margin: 48px 0;
}

.content-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  background: #2d2d3a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.image-caption {
  color: #ffffff;
  font-size: 14px;
  margin-top: 12px;
  font-weight: 400;
}

.image-link {
  color: #3b82f6;
  text-decoration: underline;
  transition: color 0.2s;
}

.image-link:hover {
  color: #60a5fa;
}

.numbered-list {
  list-style-type: decimal;
  color: #ffffff;
  padding-left: 24px;
  margin-top: 24px;
}

.numbered-list li {
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 16px;
  padding-left: 8px;
}

/* Conclusion Section */
.conclusion-section {
  background: #2d2d3a;
  padding: 32px;
  border-radius: 12px;
  margin: 64px 0;
}

.conclusion-heading {
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.3;
}

/* Author and Social Sharing Section */
.author-social-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;
  margin-top: 64px;
  border-top: 1px solid #3d3d3d;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-name {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.author-title {
  color: #a3a3a3;
  font-size: 14px;
  font-weight: 400;
}

.social-sharing {
  display: flex;
  align-items: center;
  gap: 12px;
}

.copy-link-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #2d2d3a;
  border: 1px solid #3d3d3d;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-link-btn:hover {
  background: #3d3d3d;
  border-color: #4d4d4d;
}

.social-icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2d2d3a;
  border: 1px solid #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  transition: all 0.2s;
}

.social-icon-btn:hover {
  background: #3d3d3d;
  border-color: #4d4d4d;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-header-section {
    padding: 80px 0 60px;
  }

  .main-title {
    font-size: 36px;
  }

  .subtitle {
    font-size: 18px;
  }

  .blog-content-section {
    padding: 60px 0;
  }

  .section-heading,
  .conclusion-heading {
    font-size: 28px;
  }

  .content-paragraph {
    font-size: 15px;
  }

  .author-social-section {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }

  .social-sharing {
    width: 100%;
    justify-content: flex-start;
  }

  .conclusion-section {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
  }

  .tags-container {
    gap: 12px;
  }
}
</style>
