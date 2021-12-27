<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div v-show="open" class="fixed inset-0">
    <div class="flex justify-center items-center h-full">
      <div @click="$emit('close')" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div class="bg-white transform">
        <div class="flex p-2">
          <input v-model="task" type="text" />
          <button @click="taskSave" class="bg-blue-500 text-white px-2">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Task from "../Entities/Task";

defineProps(["open"]);
const emit = defineEmits(["close", "save", "task"]);
const task = ref();

const taskSave = () => {
  emit("task", task.value);
  // let newTask = new Task();
  // newTask.setText(task.value);
  // fetch("http://localhost:3000/tasks", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(newTask),
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     emit("save", res);
  //     emit("close");
  //   })
  //   .catch((err) => console.error(err));
};
</script>

<style>
</style>