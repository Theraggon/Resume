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
    default: false,
  },
  headingLevel: {
    type: String,
    default: "h3",
    validator: (value) => ["h2", "h3", "h4", "h5", "h6"].includes(value),
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
  <div class="border-b border-gray-200 dark:border-gray-700 py-4 accordion">
    <button
      @click="toggle"
      @keydown.space.prevent="toggle"
      @keydown.enter="toggle"
      class="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
      :aria-expanded="isOpen"
      :aria-controls="`accordion-content-${title
        .replace(/\s+/g, '-')
        .toLowerCase()}`"
      role="button"
      tabindex="0"
    >
      <component
        :is="headingLevel"
        class="font-bold text-xl md:text-xl sm:text-lg"
      >
        {{ title }}
      </component>
      <FontAwesomeIcon
        :icon="isOpen ? ['fas', 'chevron-down'] : ['fas', 'chevron-right']"
        class="text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ml-2 min-w-[1rem]"
        aria-hidden="true"
      />
    </button>
    <transition
      name="accordion"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div
        v-show="isOpen"
        :id="`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`"
        class="mt-4 overflow-hidden"
      >
        <div class="accordion-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
