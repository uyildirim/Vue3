<template>
  <div class="w-full flex flex-col mr-3">
    <div class="font-semibold text-2xl border-b py-3 mb-4">Blog Header</div>
    <div
      v-for="item in post"
      :key="item.id"
      id="card"
      class="w-full p-2 shadow flex mb-5 rounded space-x-3"
    >
      <!-- {{ item }}
      {{ item.image }} -->
      <div class="flex-shrink-0">
        <img class="w-[225px]" :src="item.image" alt="" />
      </div>
      <div class="w-full space-y-1">
        <div id="header" class="bg-gray-100 flex h-10 items-center py-1 px-2 rounded divide-x-2">
          <div class="flex">
            <img class="rounded-full" src="https://source.unsplash.com/random/25x25" />
            <h5 class="px-2">Kristin Watson</h5>
          </div>
          <h5 class="px-2">Mobile</h5>
          <h5 class="px-2">Views: 10</h5>
          <span class="flex justify-center items-center space-x-1 px-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 1.66675H3.33341C2.41675 1.66675 1.66675 2.41675 1.66675 3.33341V18.3334L5.00008 15.0001H16.6667C17.5834 15.0001 18.3334 14.2501 18.3334 13.3334V3.33341C18.3334 2.41675 17.5834 1.66675 16.6667 1.66675ZM16.6667 13.3334H5.00008L3.33341 15.0001V3.33341H16.6667V13.3334ZM5.83341 7.50008H7.50008V9.16675H5.83341V7.50008ZM9.16675 7.50008H10.8334V9.16675H9.16675V7.50008ZM12.5001 7.50008H14.1667V9.16675H12.5001V7.50008Z"
                fill="black"
              />
            </svg>

            <span>3</span>
          </span>
        </div>
        <div id="content" class="">
          <div>
            <h3 class="text-xl font-bold text-gray-900">
              {{ item.title }}
            </h3>
          </div>
          <div>
            <!-- <h4 class="text-base">{{ item.content }}</h4> -->
            <div v-html="item.content"></div>
          </div>
        </div>
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
