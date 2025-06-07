<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "primary", "success", "warning", "danger"].includes(value),
  },
});
</script>

<template>
  <span
    class="px-3 py-1 rounded-full text-sm"
    :class="[
      variant === 'default'
        ? 'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
        : '',
      variant === 'success'
        ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200'
        : '',
      variant === 'warning'
        ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200'
        : '',
      variant === 'danger'
        ? 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'
        : '',
    ]"
  >
    {{ text }}
  </span>
</template>
