<template>
  <div class="flex justify-center mt-6">
    <div id="todo-container" class="relative w-72 rounded shadow overflow-hidden">
      <div id="todo-header" class="flex items-center p-6 text-white bg-gradient-to-r from-[#b2b7ff] to-[#aaaef5] relative">
        <!-- Add Task -->
        <button @click="open = true" class="absolute right-5 shadow-lg -bottom-5 bg-blue-500 rounded-full p-2">
          <svg class="text-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path fill="#fff" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>
        <div id="comlated" class="text-6xl mr-2">1</div>
        <div id="task">
          <div>Tasks</div>
          <div>/ 3</div>
          {{ isActive }}
        </div>
      </div>
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
      <div id="todo-list">
        <ul class="max-h-64 overflow-y-auto">
          <li v-for="todo in todos" :key="todo.id">
            <Task :todo="todo" @deleteTask="deleteTask" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <TaskSave :open="open" @close="open = false" @save="emitSave" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import Task from "../components/Task.vue";
import TaskSave from "../components/TaskSave.vue";

const isActive = ref("notCompleted");
const open = ref(false);
const todos = ref([]);
const cloneTodos = ref([]);
const emitSave = (item) => {
  todos.value.push(item);
};
onMounted(() => {
  fetch("http://localhost:3000/tasks")
    .then((res) => res.json())
    .then((data) => (todos.value = data));
});

const deleteTask = (item) => {
  todos.value = todos.value.filter((todo) => todo.id !== item.id);
};
const allTask = () => {
  isActive.value = "list";
  fetch("http://localhost:3000/tasks")
    .then((res) => res.json())
    .then((data) => (todos.value = data));
};
const notCompleted = () => {
  isActive.value = "notCompleted";
  fetch("http://localhost:3000/tasks?completed=false")
    .then((res) => res.json())
    .then((data) => (todos.value = data));
};
const completed = () => {
  isActive.value = "Completed";
  fetch("http://localhost:3000/tasks?completed=true")
    .then((res) => res.json())
    .then((data) => (todos.value = data));
};
</script>

<style></style>