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
      'inline-flex items-center justify-center rounded font-medium',
      // Variants
      variant === 'default'
        ? 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
        : '',
      variant === 'primary'
        ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900'
        : '',
      variant === 'outline'
        ? 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
        : '',
      variant === 'text'
        ? 'bg-transparent hover:text-gray-600 dark:hover:text-gray-300'
        : '',

      // Sizes
      size === 'sm' ? 'px-3 min-h-8 text-sm' : '',
      size === 'md' ? 'px-4 min-h-10 text-base' : '',
      size === 'lg' ? 'px-6 min-h-12 text-lg' : '',

      // Disabled state
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <slot></slot>
  </component>
</template>
