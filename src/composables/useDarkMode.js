import { ref } from "vue";

const isDarkMode = ref(false);

export const useDarkMode = () => {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};
