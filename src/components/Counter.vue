<template>
  <div class="flex gap-5 bg-slate-200/50 rounded-md text-2xl p-14 justify-around">
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
