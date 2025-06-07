<script setup>
import Button from "./ui/Button.vue";
import Badge from "./ui/Badge.vue";

const projects = [
  {
    title: "Minimap Reminder",
    url: "https://theraggon.dev/reminder",
    description:
      "A web application designed to mitigate infrequent minimap monitoring in gaming through customizable audio-visual cues. Hosted on Azure with SSL.",
    details: [
      {
        label: "Role & Contributions",
        content:
          "Sole designer and developer across all iterations. Architected and implemented the current web application, including UI/UX design, dynamic sound generation (Web Audio API with randomized frequencies), volume control, and desktop notifications (Notification API). Managed deployment and configuration on Azure.",
      },
      {
        label: "Key Technologies",
        content:
          "Angular, HTML5, CSS3, Web Audio API, Notification API, Azure (Hosting), SSL.",
      },
      {
        label: "Problem Solved & Impact",
        content:
          "Provides a highly customizable and less ignorable reminder system compared to generic timers, featuring varied sound cues and optional desktop notifications. Informal user feedback indicated a noticeable improvement in in-game awareness.",
      },
      {
        label: "Technical Challenge Example",
        content:
          "Engineered a custom sound generation module using Web Audio API with randomized frequencies to ensure non-repetitive, attention-grabbing cues.",
      },
    ],
    technologies: [
      "Angular",
      "HTML5",
      "CSS3",
      "Web Audio API",
      "Notification API",
      "Azure",
    ],
  },
  {
    title: "Personal Resume",
    url: "https://resume.theraggon.dev",
    description:
      "A web application designed to mitigate infrequent minimap monitoring in gaming through customizable audio-visual cues. Hosted on Azure with SSL.",
  },
];
</script>

<template>
  <section id="projects" class="mb-8">
    <h2>Projects</h2>

    <div v-for="(project, index) in projects" :key="index" class="mb-8">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
      >
        <h3 class="text-xl font-bold">{{ project.title }}</h3>
        <Button
          variant="text"
          as="a"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center mt-1 md:mt-0"
        >
          <span>{{ project.url }}</span>
          <span class="material-icons text-sm ml-1">open_in_new</span>
        </Button>
      </div>
      <p class="mb-4">{{ project.description }}</p>

      <div class="flex flex-wrap gap-2 mb-4">
        <Badge
          v-for="(tech, i) in project.technologies"
          :key="i"
          :text="tech"
          variant="default"
        />
      </div>

      <div class="space-y-4">
        <div v-for="(detail, i) in project.details" :key="i">
          <p>
            <strong>{{ detail.label }}:</strong> {{ detail.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
