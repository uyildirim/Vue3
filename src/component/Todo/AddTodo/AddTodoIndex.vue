<template>
  <div class="flex flex-col border rounded transition-all duration-1000">
    <TitleInput v-model="todoItem.title" />
    <DescriptionTextarea v-model="todoItem.description" />
    <ActionInput @save="$emit('save', todoItem)" @cancel="$emit('cancel')" />
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
// import { CalendarIcon, PlusIcon, BackspaceIcon } from "@heroicons/vue/outline";
import TitleInput from "./TitleInput.vue";
import DescriptionTextarea from "./DescriptionTextarea.vue";
import ActionInput from "./ActionInput.vue";
let item = defineProps(["item"]);
watch(item, (newValues) => {
  todoItem.value = newValues.item;
});

const message = ref();

const todoItem = ref({
  title: null,
  description: null,
});
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
const sil = () => {
  date.value = null;
};
</script>

<style></style>
