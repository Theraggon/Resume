<script setup>
import ExperienceItem from "./ExperienceItem.vue";

const experiences = [
  {
    title: "Lead Frontend Developer",
    company: "Digital Solutions, s.r.o.",
    location: "Pardubice, Czechia",
    period: "April 2022 – Present",
    achievements: [
      "Led frontend development for a key digital signatures project using Vue 3, TypeScript, and Tailwind CSS, delivering a feature-rich UI that enables clients including M&M Reality, Moneta Money Bank, Raiffeisen, ČEZ, J&T Bank, and SGEF to securely send over 300,000 documents annually.",
      'Engineered the frontend for Bank iD\'s <a href="https://podepis.bankid.cz/">podepis.bankid.cz</a>, enabling secure document signing for anyone to try for free.',
      "Utilized Mozilla's PDF.js for robust PDF document display within the application, ensuring accurate rendering even for some very large documents.",
      "Maintained and enhanced the legacy drag-and-drop system for signature placement (DnD API), and contributed to a major rewrite aiming for seamless support across all device types.",
      "Spearheaded the development of WAI-ARIA accessibility features according to best practices, significantly improving accessibility compliance and user experience for individuals with disabilities.",
      "Implemented internationalization (i18n) using i18next, enabling support for multiple languages and expanding the application's reach world-wide.",
      "Drove the adoption of unit testing (Vitest).",
      "Translated complex Figma designs into pixel-perfect, interactive Vue.js components, ensuring high fidelity to design specifications and delivering over 100 key UI modules.",
      "Developed and maintained HTML email templates for critical customer communications compatible with most email clients including Outlook.",
      "Contributed to changes on the company's Nuxt.js based landing site",
    ],
  },
  {
    title: "Software Developer",
    company: "Domat Control System",
    location: "Pardubice, Czechia",
    period: "March 2020 – April 2022 (2 years 2 months)",
    achievements: [
      "Developed and maintained a critical data visualization application (Angular, RxJs) for smart building sensors, enabling clients, including supermarkets and hypermarkets, to monitor and optimize energy consumption and other key metrics.",
      "Contributed to backend development using C#.NET Core/5+, implementing scheduling application using Quartz.NET",
    ],
  },
];
</script>

<template>
  <section id="experience" class="mb-8">
    <h2>Experience</h2>
    <div class="flex flex-col gap-6">
      <ExperienceItem
        v-for="(experience, index) in experiences"
        :key="index"
        :title="experience.title"
        :company="experience.company"
        :location="experience.location"
        :period="experience.period"
        :achievements="experience.achievements"
      />
    </div>
  </section>
</template>
