<template>
  <div>
    <div class="flex flex-col border rounded transition-all duration-1000">
      <TitleInput v-model="todoItem.title" />
      <DescriptionTextarea v-model="todoItem.description" />
      <div class="flex items-center justify-between p-2">
        <div class="w-40">
          <DateInput v-model="todoItem.date" />
        </div>
        <div class="flex">
          <Flag />
          <Tag />
        </div>
      </div>
      <!-- <ActionInput />
      <ActionGroup /> -->
    </div>
    <ActionButtun @save="$emit('save', todoItem)" @cancel="$emit('cancel')" />
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
// import { CalendarIcon, PlusIcon, BackspaceIcon } from "@heroicons/vue/outline";
import TitleInput from "./TitleInput.vue";
import DescriptionTextarea from "./DescriptionTextarea.vue";
import ActionInput from "./ActionInput.vue";
import ActionGroup from "./ActionGroup.vue";
import ActionButtun from "./ActionButtun.vue";
import DateInput from "./DateInput.vue";
import Tag from "../../ActionGroup/Tag.vue";
import Flag from "../../ActionGroup/Flag.vue";
let item = defineProps(["item"]);
watch(item, (newValues) => {
  todoItem.value = newValues.item;
});

const message = ref();

const todoItem = ref({
  title: null,
  description: null,
});

const sil = () => {
  date.value = null;
};
</script>

<style></style>
