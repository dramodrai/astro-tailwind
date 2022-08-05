<template>
  <div
    class="flex gap-5 text-2xl p-4 bg-gray-200 font-bold text-amber-700 mt-4 justify-around"
  >
    <button @click="subtract()">-</button>
    <pre>{{ count }}</pre>
    <button @click="add()">+</button>
  </div>
  <div class="text-center text-3xl">
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);
const add = () => (count.value = count.value + 1);
const subtract = () => (count.value = count.value - 1);
</script>
