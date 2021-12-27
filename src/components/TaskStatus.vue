<template>
  <div id="todo-status" class="flex h-11">
    <button @click="allTask" :class="{ 'border-b border-blue-500': isActive == 'list' }" class="ml-2 p-2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <g fill="none">
          <path d="M0 0h24v24H0V0z" />
          <path d="M0 0h24v24H0V0z" opacity=".87" />
        </g>
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
      </svg>
    </button>
    <button @click="notCompleted" :class="{ 'border-b border-blue-500': isActive == 'notCompleted' }" class="p-2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" />
      </svg>
    </button>
    <button @click="completed" :class="{ 'border-b border-blue-500': isActive == 'Completed' }" class="p-2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["todos"]);
const todos = ref([]);
const isActive = ref("notCompleted");

const allTask = () => {
  isActive.value = "list";
  fetch("http://localhost:3000/tasks")
    .then((res) => res.json())
    .then((data) => emit("todos", data));
};
const notCompleted = () => {
  isActive.value = "notCompleted";
  fetch("http://localhost:3000/tasks?completed=false")
    .then((res) => res.json())
    .then((data) => emit("todos", data));
};
const completed = () => {
  isActive.value = "Completed";

  fetch("http://localhost:3000/tasks?completed=true")
    .then((res) => res.json())
    .then((data) => emit("todos", data));
};
</script>

<style>
</style>