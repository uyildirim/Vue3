<template>
  <div class="p-1 rounded hover:bg-gray-200 relative" @mouseleave="open = false">
    <FlagIcon class="w-6 h-6" @click="openTag" />
    <div class="absolute mt-1 -translate-x-2/3" v-show="open">
      <ul class="border bg-white shadow w-52 divide-y">
        <li class="p-2">
          <div class="text-sm">
            <label class="w-full flex justify-between">
              <span>Work</span>
              <input type="checkbox" />
            </label>
          </div>
        </li>
        <li class="p-2">
          <div class="text-sm">
            <label class="w-full flex justify-between">
              <span>Home</span>
              <input type="checkbox" />
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { FlagIcon } from "@heroicons/vue/outline";
import { ref, inject, watch } from "vue";

// const modal = inject("modalShow");
// watch(modal, (item) => {
//   open.value = false;
// });
const open = ref(false);

const openTag = () => {
  open.value = !open.value;
};
const test = () => {
  console.log("ss");
};
</script>

<style>
</style>