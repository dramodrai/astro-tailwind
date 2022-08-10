<template>
  <div class="rounded-md">
    <select class="select w-full max-w-xs" data-choose-theme>
      <option disabled selected>Theme</option>

      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, onUnmounted } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});
onUpdated(() => {
  localStorage.setItem(themeChange(true));
});

const themes = [
  "light",
  "dark",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "aqua",
  "wireframe",
  "luxury",
  "dracula",
];
</script>
