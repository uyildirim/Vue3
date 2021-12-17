<template>
  <div>
    <div
      v-for="item in TodoList"
      :key="item.id"
      class="border-b border-gray-200 border-opacity flex py-3"
    >
      <div>
        <input
          v-model="item.complated"
          @change="change(item)"
          class="
            form-checkbox
            rounded-full
            border border-gray-500
            ring-0
            w-[18px]
            h-[18px]
            mr-2
          "
          type="checkbox"
        />
      </div>
      <div>
        <span
          @click="modalData(item)"
          class="text-sm"
          :class="{ 'line-through': item.complated }"
        >
          {{ item.title }}
        </span>
        <div
          class="flex items-center gap-1 transition-all duration-1000"
          v-show="!item.complated && item.date"
        >
          <CalendarIcon class="w-3 h-3 text-red-700" />
          <span class="text-xs text-red-800">{{ NewDate(item.date) }}</span>
        </div>
      </div>
    </div>
    <TodoChangeModal
      v-show="modalVisable"
      :data="data"
      @modal="modalVisable = false"
    />
  </div>
</template>

<script setup>
defineProps(["TodoList"]);
import { inject, ref } from "vue";
import { CalendarIcon } from "@heroicons/vue/outline";
import TodoChangeModal from "./Modal/TodoChangeModal.vue";
const appAxios = inject("appAxios");

const change = (item) => {
  console.log(item);
  appAxios
    .patch(`todo/${item.id}`, { complated: item.complated })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const NewDate = (item) => {
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
const modalVisable = ref(true);
const data = ref();
const modalData = (item) => {
  data.value = item;
  modalVisable.value = true;
};
</script>

<style scoped></style>
