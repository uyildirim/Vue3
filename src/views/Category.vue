<template>
  <div class="shadow w-80 mt-14 ml-14 p-3">
    <h1 class="mb-3 bg-gray-400 text-center p-2 text-gray-50">Add New Category</h1>

    <div>
      <label>Category</label>
      <input v-model="post.text" type="text" />
    </div>

    <div class="text-right space-x-3 mt-3">
      <button @click="$router.back()" class="bg-pink-500 text-white py-1 px-2 rounded-md">
        Cancel
      </button>
      <button @click="save" class="bg-indigo-500 text-white py-1 px-2 rounded-md">Save</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
import slug from "../Utils/Slug";

const post = ref({});
const save = () => {
  post.value.value = slug(post.value.text);

  console.log(post.value);
  axios.post("http://localhost:3000/categories", post.value).then((req) => {
    router.back();
  });
};
</script>

<style scoped>
input {
  @apply border py-1 px-2 w-full;
}
label {
  @apply block;
}
</style>
