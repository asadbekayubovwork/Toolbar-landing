<script setup lang="ts">
const developers = [
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    bio: "Full-stack developer with 10+ years of experience in building scalable web applications.",
    avatar: "👩‍💻",
    skills: ["Vue.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "Bob Smith",
    role: "Frontend Developer",
    bio: "Passionate about creating beautiful and intuitive user interfaces.",
    avatar: "👨‍💻",
    skills: ["Vue.js", "React", "CSS", "UI/UX"],
  },
  {
    name: "Carol Williams",
    role: "Backend Developer",
    bio: "Specializes in API design and database optimization.",
    avatar: "👩‍💼",
    skills: ["Python", "Django", "MongoDB", "Redis"],
  },
  {
    name: "David Brown",
    role: "DevOps Engineer",
    bio: "Ensures smooth deployments and maintains our infrastructure.",
    avatar: "👨‍🔧",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
  },
  {
    name: "Emma Davis",
    role: "UI/UX Designer",
    bio: "Creates engaging user experiences with a focus on accessibility.",
    avatar: "👩‍🎨",
    skills: ["Figma", "Adobe XD", "Design Systems", "User Research"],
  },
  {
    name: "Frank Miller",
    role: "QA Engineer",
    bio: "Ensures quality through comprehensive testing and automation.",
    avatar: "👨‍🔬",
    skills: ["Jest", "Cypress", "Test Automation", "Quality Assurance"],
  },
]
</script>

<template>
  <div class="py-12 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          class="text-4xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {{ $t("developers.title") }}
        </h1>
        <p
          class="text-xl text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {{ $t("developers.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(developer, index) in developers"
          :key="developer.name"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          :data-aos="'fade-up'"
          :data-aos-duration="'1000'"
          :data-aos-delay="String(100 * (index + 1))"
        >
          <div class="text-center mb-4">
            <div class="text-6xl mb-4">{{ developer.avatar }}</div>
            <h3 class="text-xl font-semibold text-gray-900">
              {{ developer.name }}
            </h3>
            <p class="text-blue-600 font-medium">{{ developer.role }}</p>
          </div>

          <p class="text-gray-600 text-sm mb-4 text-center">
            {{ developer.bio }}
          </p>

          <div class="border-t pt-4">
            <p class="text-xs font-semibold text-gray-700 mb-2 text-center">
              {{ $t("developers.skills") }}
            </p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span
                v-for="skill in developer.skills"
                :key="skill"
                class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-16 bg-white p-8 rounded-lg shadow-md text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h2
          class="text-2xl font-bold text-gray-900 mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {{ $t("developers.joinTeam") }}
        </h2>
        <p
          class="text-gray-600 mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {{ $t("developers.joinTeamText") }}
        </p>
        <button
          class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          {{ $t("developers.viewPositions") }}
        </button>
      </div>
    </div>
  </div>
</template>
