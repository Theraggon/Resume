<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Summary from "./components/Summary.vue";
import Experience from "./components/Experience.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Achievements from "./components/Achievements.vue";
import Footer from "./components/Footer.vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
};
</script>

<template>
  <div class="min-h-screen transition-colors duration-300">
    <div class="container mx-auto px-4 py-8 max-w-5xl">
      <Header @toggle-dark-mode="toggleDarkMode" :is-dark-mode="isDarkMode" />

      <main>
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Projects />
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

@media print {
  /* Add print-specific styles */
  .print-light-mode {
    background-color: white !important;
    color: #111827 !important;
  }
}

section {
  @apply py-10 border-b border-gray-200 dark:border-gray-700 scroll-mt-20;
}

section:last-of-type {
  @apply border-b-0;
}

h2 {
  @apply text-3xl font-bold mb-6;
}

h3 {
  @apply text-xl font-bold mb-2;
}
</style>
