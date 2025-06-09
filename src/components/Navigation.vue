<script setup>
import Button from "./ui/Button.vue";
import { useDarkMode } from "../composables/useDarkMode";

defineProps({
  isMobileNavOpen: {
    type: Boolean,
    required: false,
  },
});

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>
<template>
  <!-- Navigation - Desktop view as horizontal, Mobile as dropdown -->
  <nav
    :class="{
      hidden: !isMobileNavOpen,
    }"
    class="flex flex-col md:flex-row flex-wrap items-center gap-4 md:flex min-h-10 print:hidden"
  >
    <a
      href="#experience"
      class="border-b border-transparent hover:border-b hover:border-gray-700 hover:dark:border-gray-300 py-1"
      >Experience</a
    >
    <a
      href="#education"
      class="border-b border-transparent hover:border-b hover:border-gray-700 hover:dark:border-gray-300 py-1"
      >Education</a
    >
    <a
      href="#skills"
      class="border-b border-transparent hover:border-b hover:border-gray-700 hover:dark:border-gray-300 py-1"
      >Skills</a
    >
    <a
      href="#projects"
      class="border-b border-transparent hover:border-b hover:border-gray-700 hover:dark:border-gray-300 py-1"
      >Projects</a
    >
    <a
      href="#achievements"
      class="border-b border-transparent hover:border-b hover:border-gray-700 hover:dark:border-gray-300 py-1"
      >Achievements</a
    >

    <div class="flex items-center">
      <Button
        variant="outline"
        size="md"
        @click="toggleDarkMode"
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        <font-awesome-icon
          v-if="isDarkMode"
          :icon="['fas', 'sun']"
          class="w-4"
        />
        <font-awesome-icon v-else :icon="['fas', 'moon']" class="w-4" />
      </Button>
      <Button
        class="ml-2 print:hidden"
        variant="primary"
        as="a"
        href="/Ondrej_Tesar.md"
        download="Ondrej_Tesar.md"
      >
        <font-awesome-icon :icon="['fas', 'download']" class="mr-1" />
        Download CV
      </Button>
    </div>
  </nav>
</template>
