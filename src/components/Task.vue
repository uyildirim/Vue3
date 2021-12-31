<template>
  <div class="flex items-center first:border-t border-b h-11 w-full text-sm font-light group">
    <label class="w-full">
      <input
        type="checkbox"
        v-model="todo.completed"
        @change="toggle(todo)"
        class="text-indigo-500 ring-2 ring-indigo-500 w-4 h-4 mr-2 ml-4 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 border border-gray-300 rounded-full"
      />
      {{ !editing ? todo.text : null }}
      <input @focusout="edit(todo)" v-if="editing" v-model="todo.text" class="p-0 m-0 border-0 border-b text-sm font-light" type="text" />
    </label>

    <!-- Edit -->
    <button @click="update(todo)" class="group-hover:block hidden bg-yellow-500 h-full px-1 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          fill="currentColor"
          d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
        />
      </svg>
    </button>

    <!-- Delete -->
    <button @click="taskDelete(todo)" class="group-hover:block hidden bg-red-500 text-white h-full px-1">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path fill="currentColor" d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TaskService from "../Service/TaskService";
import TaskSave from "./TaskSave.vue";

defineProps(["todo"]);

const editing = ref(false);

const update = (item) => {
  editing.value = true;
  console.log(item);
};

const emits = defineEmits(["deleteTask", "update"]);
const taskDelete = (item) => {
  fetch(`http://localhost:3000/tasks/${item.id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => {
      emits("deleteTask", item);
    });
};
const toggle = (item) => {
  fetch(`http://localhost:3000/tasks/${item.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: item.completed }),
  });
};
const edit = (item) => {
  console.log(item);
  fetch(`http://localhost:3000/tasks/${item.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: item.text }),
  })
    .then((res) => res.json())
    .then((data) => {
      editing.value = false;
      console.log(data);
    });
};
</script>

<style>
</style>