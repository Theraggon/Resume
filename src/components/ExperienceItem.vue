<script setup>
import DOMPurify from "dompurify";

defineProps({
  title: String,
  company: String,
  location: String,
  period: String,
  achievements: Array,
});

// Function to sanitize HTML content
const sanitizeHTML = (html) => {
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-lg font-medium">
        <span>{{ company }}</span> | <span>{{ location }}</span>
      </p>
      <p class="italic text-gray-600 dark:text-gray-400">{{ period }}</p>
    </div>
    <ul class="list-disc pl-6 gap-2 mt-4 text-left">
      <li
        v-for="(achievement, index) in achievements"
        :key="index"
        class="text-base experience-item"
        v-html="sanitizeHTML(achievement)"
      ></li>
    </ul>
  </div>
</template>

<style lang="css">
.experience-item a {
  color: var(--color-blue-600);
}

.dark .experience-item a {
  color: var(--color-blue-400);
}
.experience-item a:hover {
  text-decoration: underline;
}
</style>
