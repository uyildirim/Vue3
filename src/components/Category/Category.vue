<template>
  <h1 class="font-semibold text-2xl p-3 border-b">Categories</h1>
  <div id="sidebar-card" class="shadow mt-4">
    <ul class="divide-y">
      <li
        v-for="category in categories"
        :key="category.id"
        class="flex justify-between py-2 px-3 text-sm text-gray-600"
      >
        <span>{{ category.text }}</span>
        <span
          class="
            flex
            items-center
            justify-center
            bg-indigo-400
            rounded-full
            text-xs
            px-2
            text-white
          "
          >{{ category.posts.length }}</span
        >
      </li>
    </ul>
    {{ categoryLength() }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const categories = ref();
const categoryLength = () => {};

axios.get("http://localhost:3000/categories?_embed=posts").then((res) => {
  categories.value = res.data;
});
</script>

<style></style>
