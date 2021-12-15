<template>
  <div
    @click="$emit('modal', false)"
    class="modal-overlay absolute inset-0 flex justify-center bg-[#000000da]"
  >
    <div @click.stop class="absolute top-10 shadow rounded-md overflow-hidden">
      <div class="bg-white px-5 py-5 w-[500px] space-y-2">
        <div id="model-header" class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <FolderIcon class="w-5 h-5 inline-block" />
            <span>Klasör</span>
          </div>
          <button @click="$emit('modal', false)" class="hover:bg-gray-100">
            <XIcon class="h-5 w-5" />
          </button>
        </div>
        <div class="flex space-x-4">
          <div class="">
            <input class="w-5 h-5" type="checkbox" />
          </div>
          <div class="w-full">
            <div class="mb-2">
              <span class="font-semibold">{{ data.title }}</span>
            </div>
            <div class="mb-6">
              <span class="text-sm">{{ data.text }}</span>
            </div>
            <div class="flex items-center justify-between">
              <div
                class="
                  text-red-500
                  rounded
                  w-20
                  font-light
                  text-sm
                  border border-red-300
                  py-1
                  flex
                  justify-center
                  items-center
                "
              >
                <CalendarIcon class="w-4 h-4" />
                <span class="ml-1">{{ NewDate(data.date) || "" }}</span>
              </div>
              <div class="flex items-center text-gray-600">
                <span class="p-1 rounded hover:bg-gray-200"><FlagIcon class="w-6 h-6" /></span>
                <span class="p-1 rounded hover:bg-gray-200"><ClockIcon class="w-6 h-6" /></span>
                <span class="p-1 rounded hover:bg-gray-200"><TagIcon class="w-6 h-6" /></span>
              </div>
            </div>
          </div>
        </div>
        <AddTodoIndex @save="save" @cancel="$emit('modal', false)" :item="data" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AddTodoIndex from "../Todo/AddTodo/AddTodoIndex.vue";
import {
  XIcon,
  FolderIcon,
  CalendarIcon,
  FlagIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/vue/outline";

defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const NewDate = (item) => {
  if (!item) return false;
  let newdate = new Date(item);
  let day = String(newdate.getDate()).padStart(2, "0");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[newdate.getMonth()];
  let finalDate = `${day} ${month}`;
  return finalDate;
};
const save = (item) => {
  console.log(item);
};
console.log(NewDate());
</script>

<style scoped>
</style>