<template>
  <div class="w-full mr-3">
    <div class="font-semibold text-2xl border-b py-3 mb-4">Blog Header</div>
    <div
      v-for="item in post"
      :key="item.id"
      id="card"
      class="h-48 w-full p-2 border shadow flex justify-between mb-5 rounded"
    >
      <div id="card-content" class="w-full flex flex-col justify-between h-full">
        <div class="flex flex-col h-full">
          <span class="text-gray-400 font-medium">{{ item.category?.text && "dd" }}</span>
          <span class="text-xl text-gray-600 font-semibold">{{ item.title }}</span>
          <div class="text-xs space-x-3">
            <span>{{ momentCreateDate(item.createAt) }}</span> <span>{{ item.views }} views</span>
          </div>
          <div class="text-sm mt-2 w-full">{{ item.content }}</div>
        </div>
        <div class="flex justify-between">
          <span class="text-sm border-b border-purple-500">Reading</span>
        </div>
      </div>

      <div id="img" class="w-52 h-full flex-shrink-0 ml-2">
        <img class="w-full h-full object-cover" :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import moment from "moment";

import { ref } from "vue";
import { getPost } from "../../firebase/post";

const postData = ref([]);
const { post, error, getAllPost } = getPost();
getAllPost();
setTimeout(() => {
  console.log(post.value);
}, 500);

const momentCreateDate = (date) => {
  let d = date.toDate();
  const createAtDate = moment(d).fromNow(false);
  return createAtDate;
};
</script>

<style></style>
