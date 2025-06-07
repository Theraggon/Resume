<script setup>
import { ref } from "vue";
import Button from "./ui/Button.vue";

defineProps({
  isDarkMode: Boolean,
});

defineEmits(["toggle-dark-mode"]);

const mobileNavOpen = ref(false);
</script>

<template>
  <header
    class="flex flex-col md:flex-row md:flex-wrap items-center justify-between py-4 mb-12"
  >
    <div class="text-center md:text-left mb-6 md:mb-0">
      <h1 class="text-4xl font-bold">Ondřej Tesař</h1>
      <p class="text-xl text-primary mt-1">Lead Frontend Developer</p>
      <div
        class="flex flex-col items-center justify-center md:justify-start md:items-start mt-4 gap-x-4 gap-y-2"
      >
        <a
          href="mailto:dev.tesar.ondrej@gmail.com"
          class="flex items-center text-black dark:text-gray-200 hover:text-primary transition-colors"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" class="mr-1" />
          dev.tesar.ondrej@gmail.com
        </a>
        <a
          href="tel:+420730585330"
          class="flex items-center text-black dark:text-gray-200 hover:text-primary transition-colors"
        >
          <font-awesome-icon :icon="['fas', 'phone']" class="mr-1" />
          +420 730 585 330
        </a>
        <span class="flex items-center text-black dark:text-gray-200">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-1" />
          Prague, Czechia </span
        ><a
          href="https://www.linkedin.com/in/ondřej-tesař-179b17148/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-black dark:text-gray-200 hover:text-primary transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="mr-1" />
          LinkedIn
        </a>
      </div>
    </div>

    <!-- Mobile navigation toggle -->
    <div class="md:hidden mb-4">
      <Button
        variant="default"
        size="sm"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <span class="material-icons">{{
          mobileNavOpen ? "close" : "menu"
        }}</span>
      </Button>
    </div>

    <!-- Navigation - Desktop view as horizontal, Mobile as dropdown -->
    <nav
      :class="{
        'flex flex-col md:flex-row items-center gap-4': true,
        hidden: !mobileNavOpen,
        'md:flex': true,
      }"
    >
      <a href="#summary" class="hover:text-primary transition-colors py-1"
        >Summary</a
      >
      <a href="#experience" class="hover:text-primary transition-colors py-1"
        >Experience</a
      >
      <a href="#education" class="hover:text-primary transition-colors py-1"
        >Education</a
      >
      <a href="#skills" class="hover:text-primary transition-colors py-1"
        >Skills</a
      >
      <a href="#projects" class="hover:text-primary transition-colors py-1"
        >Projects</a
      >
      <a href="#achievements" class="hover:text-primary transition-colors py-1"
        >Achievements</a
      >

      <div class="flex items-center mt-4 md:mt-0">
        <Button
          variant="text"
          size="sm"
          @click="$emit('toggle-dark-mode')"
          aria-label="Toggle dark mode"
        >
          <font-awesome-icon v-if="isDarkMode" :icon="['fas', 'sun']" />
          <font-awesome-icon v-else :icon="['fas', 'moon']" />
        </Button>
        <Button
          class="ml-2 print-hidden"
          variant="primary"
          as="a"
          href="javascript:void(window.print())"
        >
          <font-awesome-icon :icon="['fas', 'download']" class="mr-1" />
          Download CV
        </Button>
      </div>
    </nav>
  </header>
</template>
