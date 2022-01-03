<template>
  <div class="shadow w-80 mt-14 ml-14 p-3">
    <h1 class="mb-3 bg-gray-400 text-center p-2 text-gray-50">Add New Post</h1>

    <div>
      <label>Title</label>
      <input v-model="post.title" type="text" />
    </div>
    <div>
      <label>Image</label>
      <input v-model="post.image" type="text" />
    </div>
    <div>
      <label>Description</label>
      <textarea v-model="post.body" class="w-full border" rows="5"></textarea>
    </div>
    <div class="text-right space-x-3">
      <button @click="$router.back()" class="bg-pink-500 text-white py-1 px-2 rounded-md">
        Cancel
      </button>
      <button
        @click="
          save();
          $router.back();
        "
        class="bg-indigo-500 text-white py-1 px-2 rounded-md"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const post = ref({
  image: "https://source.unsplash.com/900x900/?beach",
});

const save = () => {
  axios.post("http://localhost:3000/posts", post.value);
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
