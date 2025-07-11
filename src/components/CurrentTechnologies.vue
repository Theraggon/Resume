<script setup>
import ts from "../icons/ts.vue";
import tailwind from "../icons/tailwind.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faBolt,
  faUniversalAccess,
  faRobot,
  faGlobe,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

// Add icons to library
library.add(
  faVuejs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faCode,
  faBolt,
  faUniversalAccess,
  faRobot,
  faGlobe,
  faFilePdf
);

const technologies = [
  {
    name: "Vue 3",
    icon: ["fab", "vuejs"],
    color: "#4FC08D",
  },
  {
    name: "TypeScript",
    svgIcon: ts,
    color: "#3178C6",
  },
  {
    name: "JavaScript (ES6+)",
    icon: ["fab", "js"],
    color: "#F7DF1E",
  },
  {
    name: "HTML5 & CSS3",
    icon: ["fab", "html5"],
    color: "#E34F26",
  },
  {
    name: "Tailwind CSS",
    svgIcon: tailwind,
    color: "#38B2AC",
  },
  {
    name: "Git",
    icon: ["fab", "git-alt"],
    color: "#F05032",
  },
  {
    name: "Claude/Junie",
    icon: "robot",
    color: "#6366F1",
  },
  {
    name: "i18next",
    icon: "globe",
    color: "#26A69A",
  },
  {
    name: "Web Accessibility",
    icon: "universal-access",
    color: "#0284C7",
  },
];
</script>

<template>
  <div class="mt-6 mb-10">
    <h3 class="text-xl font-bold mb-4">Current Technology Stack</h3>
    <div
      class="flex flex-wrap gap-4 justify-center md:justify-start grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
    >
      <div
        v-for="(tech, index) in technologies"
        :key="index"
        class="flex flex-col items-center p-3 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-500"
      >
        <FontAwesomeIcon
          v-if="tech.icon"
          :icon="tech.icon"
          class="text-2xl"
          :style="{ color: tech.color }"
          aria-hidden="true"
        />
        <component v-else-if="tech.svgIcon" :is="tech.svgIcon" class="size-6">
          {{ tech.svgIcon }}
        </component>
        <span class="text-sm font-medium text-center">{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>
