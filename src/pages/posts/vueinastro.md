---
name: 'Vue framewoerk add in Astro'
title: 'Vue framewoerk add in Astro'
slug: 'astro_tailwind_vue_framework'
discription: 'Vue freamework can be used as components in Astro.js'
layout: '@/layouts/PostLayout.astro'
---

# Vue Framework as components added to the Astro

```vue
<template>
  <div class="flex gap-5 text-2xl p-14">
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
  <div class="text-center text-3xl">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);
const add = () => (count.value = count.value + 1);
const subtract = () => (count.value = count.value - 1);
</script>
```
