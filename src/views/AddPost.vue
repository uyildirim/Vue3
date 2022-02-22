<template>
  <div class="shadow w-[500px] h-full mt-14 ml-14 p-3">
    <h1 class="mb-3 bg-gray-400 text-center p-2 text-gray-50">Add New Post</h1>

    <div>
      <label>Title</label>
      <input v-model="post.title" type="text" />
    </div>
    <div>
      <label>Image</label>
      <input v-model="post.image" type="text" />
    </div>
    <div class="">
      <label>Description</label>
      <!-- <textarea v-model="post.content" class="w-full border" rows="5"></textarea> -->
      <!-- Or manually control the data synchronization -->
      <div class="h-40">
        <QuillEditor contentType="html" v-model:content="post.content" :options="options" />
      </div>
    </div>
    <div class="text-right space-x-3 mt-12">
      <button @click="$router.back()" class="bg-pink-500 text-white py-1 px-2 rounded-md">
        Cancel
      </button>
      <button @click="save()" class="bg-indigo-500 text-white py-1 px-2 rounded-md">Save</button>
    </div>
  </div>
  <h1>Content Type</h1>
  {{ post }}
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { createPost } from "../firebase/post";
import postModel from "../model/postModel";

import { Delta, QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const post = ref({
  content: null,
  image: "https://source.unsplash.com/900x900/?beach",
});

const save = () => {
  const newPost = new postModel(post.value);
  createPost({ ...post.value, userID: 3 });
};
const options = {
  modules: {
    toolbar: ["bold", "italic", "underline"],
  },
  placeholder: "Compose an epic...",
  contentType: "html",
  theme: "snow",
};
// watch(post.value, (currentValue) => {
//   const ee = new Delta(currentValue.content);

//   console.log(ee.ops);
// });
</script>

<style scoped>
input {
  @apply border py-1 px-2 w-full;
}
label {
  @apply block;
}
</style>
