<script setup>
import { ref } from "vue";
import Button from "./ui/Button.vue";
import Summary from "./Summary.vue";
import Navigation from "./Navigation.vue";

const isMobileNavOpen = ref(false);
</script>

<template>
  <header
    class="flex flex-col md:flex-row md:items-start items-center md:gap-8 gap-2 justify-between py-4"
  >
    <div class="text-center md:text-left gap-4 flex flex-col">
      <h1 class="text-4xl font-bold">Ondřej Tesař</h1>
      <div class="flex flex-col gap-2">
        <p class="text-xl whitespace-nowrap">Lead Frontend Developer</p>
        <div
          class="flex flex-col items-center justify-center md:justify-start md:items-start gap-2"
        >
          <a
            href="mailto:dev.tesar.ondrej@gmail.com"
            class="flex items-center gap-2"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
            dev.tesar.ondrej@gmail.com
          </a>
          <a href="tel:+420730585330" class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'phone']" />
            +420 730 585 330
          </a>
          <span class="flex items-center gap-2">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            Prague, Czechia
          </span>
          <a
            href="https://www.linkedin.com/in/ondřej-tesař-179b17148/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Theraggon"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center md:items-start gap-4">
      <div class="flex flex-col items-center gap-1">
        <Button
          variant="text"
          size="md"
          class="md:hidden print:hidden hover:bg-gray-200 dark:hover:bg-gray-700"
          @click="isMobileNavOpen = !isMobileNavOpen"
        >
          <span class="material-icons">{{
            isMobileNavOpen ? "close" : "menu"
          }}</span>
        </Button>

        <Navigation :isMobileNavOpen="isMobileNavOpen" />
      </div>

      <Summary />
    </div>
  </header>
</template>
