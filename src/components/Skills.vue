<script setup>
import Badge from './ui/Badge.vue';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['Vue 3', 'TypeScript', 'JavaScript (ES6+)', 'Nuxt.js', 'Angular', 'RxJs', 'HTML5', 'CSS3', 
      'Tailwind CSS', 'PDF.js', 'i18next', 'Responsive Web Design', 'Mobile-First Development', 
      'Web Accessibility (WAI-ARIA, WCAG Standards)']
  },
  {
    title: 'Testing',
    skills: ['Unit Testing (Jest, Vitest)', 'End-to-End Testing (Cypress)', 'BDD enthusiast']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub/GitLab', 'Figma', 'Docker', 'Azure (Cloud Hosting, CI/CD pipelines)']
  },
  {
    title: 'Methodologies & Practices',
    skills: ['Agile Development (Scrum/Kanban)', 'Project Management Principles', 'RESTful API Design & Integration']
  },
  {
    title: 'Languages',
    skills: ['Czech (Native)', 'English (Full Professional)', 'Italian (Elementary)']
  }
];
</script>

<template>
  <section id="skills" class="mb-8">
    <h2>Skills</h2>
    
    <div class="space-y-6">
      <div v-for="(category, i) in skillCategories" :key="i" class="mb-4">
        <h3 class="text-xl font-bold mb-2">{{ category.title }}</h3>
        <div class="flex flex-wrap gap-2">
          <Badge 
            v-for="(skill, j) in category.skills" 
            :key="j"
            :text="skill"
            variant="default"
          />
        </div>
      </div>
    </div>
  </section>
</template>
