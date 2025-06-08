<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Add the chevron icons to the library
library.add(faChevronDown, faChevronRight);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  initiallyOpen: {
    type: Boolean,
    default: true,
  },
  id: {
    type: String,
    required: false,
  },
});

const isOpen = ref(props.initiallyOpen);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

// Animation functions for smooth height transitions
const startTransition = (element) => {
  element.style.height = element.scrollHeight + "px";
};

const endTransition = (element) => {
  element.style.height = "";
};
</script>

<template>
  <section :id="id" class="mb-8">
    <div class="border-b border-gray-200 dark:border-gray-700 py-2 accordion">
      <button
        @click="toggle"
        @keydown.space.prevent="toggle"
        @keydown.enter="toggle"
        class="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
        :aria-expanded="isOpen"
        :aria-controls="`section-content-${
          id || title.replace(/\s+/g, '-').toLowerCase()
        }`"
        role="button"
        tabindex="0"
      >
        <h2 class="text-3xl md:text-3xl sm:text-2xl font-bold">
          {{ title }}
        </h2>
        <FontAwesomeIcon
          :icon="isOpen ? ['fas', 'chevron-down'] : ['fas', 'chevron-right']"
          class="text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ml-3 min-w-[1.25rem]"
          aria-hidden="true"
        />
      </button>
    </div>

    <transition
      name="accordion"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-show="isOpen"
        :id="`section-content-${
          id || title.replace(/\s+/g, '-').toLowerCase()
        }`"
        class="py-6 overflow-hidden"
      >
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </section>
</template>
