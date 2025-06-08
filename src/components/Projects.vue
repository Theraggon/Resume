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
      "Git",
    ],
  },
  {
    title: "Personal Resume",
    url: "https://resume.theraggon.dev",
    description:
      "This personal resume website hosted on Azure and written partly by AI coding agent",
    technologies: ["Vue 3", "HTML5", "CSS3", "AI", "Azure", "Git"],
  },
];
</script>

<template>
  <section id="projects">
    <h2>Projects</h2>

    <div class="flex flex-col gap-16">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col gap-6"
      >
        <div class="flex flex-col gap-2">
          <div
            class="flex flex-row flex-wrap gap-4 justify-between items-center md:items-center"
          >
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <Button
              variant="text"
              as="a"
              size="sm"
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center mt-1 md:mt-0"
            >
              <span>{{ project.url }}</span>
              <span class="material-icons text-sm ml-1">open_in_new</span>
            </Button>
          </div>
          <div class="flex flex-col gap-4">
            <p>{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="(tech, i) in project.technologies"
                :key="i"
                :text="tech"
                variant="default"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <div v-for="(detail, i) in project.details" :key="i">
            <p>
              <strong>{{ detail.label }}:</strong> {{ detail.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
