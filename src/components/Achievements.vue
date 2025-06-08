<script setup>
import Badge from "./ui/Badge.vue";

const hobbies = [
  "Guitar",
  "Street dance",
  "Parkour",
  "Running",
  "Gaming",
  "Snowboarding",
  "Cooking",
];
</script>

<template>
  <section id="achievements">
    <h2>Achievements & Interests</h2>

    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-3">
        <h3>Cybersecurity Excellence</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            Achieved Top 3 2018 and Top 8 2017 rankings in a nationwide high
            school cybersecurity competition, demonstrating advanced analytical
            and problem-solving capabilities under competitive conditions.
          </li>
          <li>
            Selected as an alternate for the Czech national team at the European
            Cyber Security Challenge, recognizing high potential in the
            cybersecurity domain.
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3">
        <h3>Strategic Thinking & Dedication</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>
            Achieved Diamond rank in League of Legends (top ~3% globally),
            demonstrating strategic planning, commitment, and high-percentile
            performance.
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3">
        <h3>Hobbies</h3>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="(hobby, index) in hobbies" :key="index" :text="hobby" />
        </div>
      </div>
    </div>
  </section>
</template>
