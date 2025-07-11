<script setup>
const institutions = [
  {
    name: "Faculty of Information Technology, Czech Technical University in Prague (FIT CTU)",
    location: "Prague, Czechia",
    period: "Studies in Informatics (2018 – 2020, not completed)",
    relevantCoursework:
      "C/C++, Data Structures and Algorithms, Functional Programming, Laws important for IT",
  },
  {
    name: "Programming & Hardware, Secondary technical school of electrical engineering in Pardubice (SPŠE)",
    location: "Pardubice, Czechia",
    period: "High School Diploma (2014 – 2018)",
    relevantCoursework:
      "Java, PHP, Javascript, HTML & CSS, Computer Networks, Computer Architecture",
  },
];
</script>

<template>
  <section id="education">
    <h2>Education</h2>
    <div class="flex flex-col gap-6">
      <div v-for="(institution, index) in institutions" :key="index">
        <h3>
          {{ institution.name }}
        </h3>
        <p class="text-lg">{{ institution.location }}</p>
        <p class="italic text-gray-600 dark:text-gray-400">
          {{ institution.period }}
        </p>
        <p class="mt-2">
          <strong>Relevant Coursework:</strong>
          {{ institution.relevantCoursework }}
        </p>
      </div>
    </div>
  </section>
</template>
