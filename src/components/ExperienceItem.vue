<script setup>
defineProps({
  title: String,
  company: String,
  location: String,
  period: String,
  achievements: Array
});
</script>

<template>
  <div class="mb-6">
    <div class="mb-2">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="text-lg font-medium">
        <span>{{ company }}</span> | <span>{{ location }}</span>
      </p>
      <p class="italic text-gray-600 dark:text-gray-400">{{ period }}</p>
    </div>
    <ul class="list-disc pl-6 space-y-2 mt-4">
      <li v-for="(achievement, index) in achievements" :key="index" class="text-base">
        {{ achievement }}
      </li>
    </ul>
  </div>
</template>
