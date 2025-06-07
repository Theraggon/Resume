<script setup>
defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "primary", "outline", "text"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  as: {
    type: String,
    default: "button",
    validator: (value) => ["button", "a"].includes(value),
  },
  href: {
    type: String,
    default: "",
  },
  download: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: "",
  },
  rel: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <component
    :is="as"
    :href="href"
    :download="download"
    :target="target"
    :rel="rel"
    :type="as === 'button' ? type : undefined"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center rounded transition-colors font-medium',
      // Variants      variant === 'default' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white' : '',
      variant === 'primary'
        ? 'bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white'
        : '',
      variant === 'outline'
        ? 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
        : '',
      variant === 'text'
        ? 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
        : '',

      // Sizes
      size === 'sm' ? 'px-3 py-1 text-sm' : '',
      size === 'md' ? 'px-4 py-2 text-base' : '',
      size === 'lg' ? 'px-6 py-3 text-lg' : '',

      // Disabled state
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </component>
</template>

<style lang="css" scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  color: white; /* Ensuring text is always white on dark background */
  cursor: pointer;
  transition: all 0.25s;
}
button:hover {
  border-color: #646cff;
}
</style>
