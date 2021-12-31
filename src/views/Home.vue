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
        <div id="comlated" class="text-6xl mr-2">{{ taskCount }}</div>
        <div id="task">
          <div>Tasks</div>
          <div>/ {{ taskLength }}</div>
        </div>
      </div>
      <TaskStatus @todos="todoStatus" />
      <div id="todo-list">
        <ul class="max-h-64 overflow-y-auto">
          <li v-for="todo in todos" :key="todo.id">
            <Task :todo="todo" @deleteTask="deleteTask" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <TaskSave v-if="open" @close="open = false" @task="taskSave" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Task from "../components/Task.vue";
import TaskSave from "../components/TaskSave.vue";
import TaskStatus from "../components/TaskStatus.vue";
import TaskCreate from "../Entities/Task";
import TaskService from "../Service/TaskService";

const open = ref(false);
const editModal = ref(false);
const todos = ref([]);
onMounted(() => {
  fetch("http://localhost:3000/tasks")
    .then((res) => res.json())
    .then((data) => (todos.value = data));
});
const taskLength = computed(() => {
  return todos.value.length;
});

const taskCount = computed(() => {
  let task = todos.value.filter((item) => item["completed"] == true);
  return task.length;
});
const taskCount1 = computed(() => {
  let todoCount = todos.value.reduce((acc, item) => {
    if (item.completed) {
      acc.push(item);
    }
    return acc;
  }, []);
  return todoCount.length;
});

const deleteTask = (item) => {
  todos.value = todos.value.filter((todo) => todo.id !== item.id);
};
const taskSave = (item) => {
  const taskService = new TaskService();
  taskService
    .save(item)
    .then((res) => res.json())
    .then((data) => {
      todos.value.push(data);
      open.value = false;
    });
};
const todoStatus = (item) => {
  todos.value = item;
};
</script>

<style></style>