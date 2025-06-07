<script setup>
import Button from './ui/Button.vue';
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="mt-12 py-8 text-center border-t border-gray-200 dark:border-gray-700">
    <p>© {{ currentYear }} Ondřej Tesař. All rights reserved.</p>
    <div class="mt-4 flex justify-center space-x-6">      <Button
        variant="text"
        size="sm"
        as="a"
        href="mailto:dev.tesar.ondrej@gmail.com"
        class="text-gray-600 dark:text-gray-400 hover:text-primary">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span class="sr-only">Email</span>
      </Button><Button
        variant="text"
        size="sm"
        as="a"
        href="https://www.linkedin.com/in/ondřej-tesař-179b17148/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="text-gray-600 dark:text-gray-400 hover:text-primary">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <span class="sr-only">LinkedIn</span>
      </Button>
        <Button
        variant="text"
        size="sm"
        as="a"
        href="/Ondrej_Tesar_Resume.pdf"
        download
        class="text-gray-600 dark:text-gray-400 hover:text-primary">
        <font-awesome-icon :icon="['fas', 'download']" />
        <span class="sr-only">Download Resume</span>
      </Button>
    </div>
  </footer>
</template>
