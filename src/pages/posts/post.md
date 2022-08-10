---
name: "Astro Tailwind Learn and Deploy"
slug: "astro_tailwind"
layout: ../../layouts/PostLayout.astro

---



<h1 class="text-xl mb-6
font-bold text-pink-500 hover:text-clip hover:text-red-500">Best way to deploy web application fast and easy</h1>

<div class="p-9">

```js

    <template>
      <div 
         class="flex gap-5 text-2xl p-14"
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
     const add = () => 
        (count.value = count.value + 1);
     const subtract = () => 
        (count.value = count.value - 1);
  </script>
    
```

</div>
