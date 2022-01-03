<template>
  <h1 class="font-semibold text-2xl p-3 border-b">Recent Posts</h1>
  <div class="gap-2 flex mt-3">
    <ul>
      <li class="font-normal" v-for="i in post" :key="i">
        <a href="#">Pariatur officia vero volupt </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const post = ref();

axios.get("http://localhost:3000/posts?_sort=id&_order=desc&_limit=5").then((res) => {
  post.value = res.data;
});
</script>

<style></style>
