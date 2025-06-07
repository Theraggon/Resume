<script setup>
import Button from "./ui/Button.vue";
import resume from "../../public/Ondrej_Tesar.md?url";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer
    class="mt-12 py-8 text-center border-t border-gray-200 dark:border-gray-700 print:hidden"
  >
    <p>© {{ currentYear }} Ondřej Tesař. All rights reserved.</p>
    <div class="mt-4 flex justify-center space-x-6">
      <Button
        variant="text"
        size="sm"
        as="a"
        href="mailto:dev.tesar.ondrej@gmail.com"
        class="text-gray-600 dark:text-gray-400"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span class="sr-only">Email</span> </Button
      ><Button
        variant="text"
        size="sm"
        as="a"
        href="https://www.linkedin.com/in/ondřej-tesař-179b17148/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 dark:text-gray-400"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <span class="sr-only">LinkedIn</span>
      </Button>
      <Button
        variant="text"
        size="sm"
        as="a"
        :href="resume"
        download="Ondrej_Tesar_Resume.md"
        class="text-gray-600 dark:text-gray-400"
      >
        <font-awesome-icon :icon="['fas', 'download']" />
        <span class="sr-only">Download Resume</span>
      </Button>
    </div>
  </footer>
</template>
