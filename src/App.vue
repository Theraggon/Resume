<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Achievements from "./components/Achievements.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen transition-colors duration-300">
    <div class="container mx-auto px-10 py-8 max-w-5xl">
      <Header />

      <main class="flex flex-col gap-10">
        <Experience />
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <Education />
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <Skills />
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <Projects />
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <Achievements />
      </main>

      <Footer />
    </div>
  </div>
</template>

<style>
@reference "./style.css";

html.dark {
  color-scheme: dark;
}

section {
  @apply scroll-mt-10;
}
h2 {
  @apply text-3xl font-bold mb-6;
}

h3 {
  @apply text-xl font-bold;
}
</style>
