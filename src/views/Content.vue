<template>
  <div class="w-full">
    <div id="content" class="my-7 mx-14">
      <div
        v-for="item in TodoList"
        :key="item.id"
        class="border-b border-gray-200 border-opacity flex py-3"
      >
        <div>
          <input
            v-model="item.complated"
            class="form-checkbox rounded-full border border-gray-500 ring-0 w-[18px] h-[18px] mr-2"
            type="checkbox"
          />
        </div>
        <div>
          <span
            @click="modelData(item)"
            class="text-sm"
            :class="{ 'line-through': item.complated }"
            >{{ item.title }}</span
          >
          <div
            class="flex items-center gap-1 transition-all duration-1000"
            v-show="!item.complated && item.date"
          >
            <CalendarIcon class="w-3 h-3 text-red-700" />
            <span class="text-xs text-red-800">{{ NewDate(item.date) }}</span>
          </div>
        </div>
      </div>

      <div>
        <AddTodo />
        <div
          @click="missionToggleAdd = !missionToggleAdd"
          class="flex gap-2 items-center mt-2 group cursor-pointer"
        >
          <PlusIcon
            class="
              w-4
              h-4
              text-red-500 text-sm
              group-hover:bg-red-500
              group-hover:text-white
              group-hover:rounded-full
              group-hover:transition-all
              group-hover:p-1
            "
          />
          <span class="text-gray-500 text-sm group-hover:text-red-500 group-hover:transition-all"
            >Görev ekle</span
          >
        </div>
      </div>
      {{ addTodoItem }}
    </div>
    <SavedModal :data="model" v-show="showModal" @close-modal="showModal = false">
      <!-- <template #test> {{ model }} </template> -->
    </SavedModal>
  </div>
</template>

<script setup>
import { ref, reactive, computed, defineAsyncComponent } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { CalendarIcon, PlusIcon, BackspaceIcon } from "@heroicons/vue/outline";

import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import SavedModal from "./Modal/SavedModal.vue";
import AddTodo from "../component/addTodo.vue";

const showModal = ref(true);
const model = ref();
const modelData = (data) => {
  showModal.value = true;
  model.value = data;
};

const ActionRow = defineAsyncComponent(() => import("./DatePicker/ActionRowCustom.vue"));

const MonthYear = defineAsyncComponent(() => import("./DatePicker/MonthYearCustom.vue"));
const monthYear = computed(() => MonthYear);

const TodoList = ref([
  {
    id: 1,
    title: "Todo Başlık",
    text: "Todo Text",
    complated: false,
    date: "2021-12-05T17:34:00.000Z",
  },
  {
    id: 2,
    title: "Todo Başlık2",
    text: "Todo Text 2",
    complated: false,
    date: "2021-12-27T17:34:00.000Z",
  },
]);
const addTodoItem = ref({
  // title: null,
  // text: null,
  // date: null,
  complated: false,
});
const AddTodo = () => {
  TodoList.value.push(addTodoItem.value);
  addTodoItem.value = { complated: false };
  missionToggleAdd.value = true;
  console.log(addTodoItem.value);
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
const open = ref(false);
const missionToggleAdd = ref(true);
// const date = ref(new Date());
const date = ref();
const logg = () => {
  console.log("log geldi");
};
const actionRow = computed(() => ActionRow);

const sil = () => {
  date.value = null;
};

const textInputOptions = ref({});
const dp = ref();
const selectDate = () => {
  dp.value.selectDate();
};
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
</script>

<style scoped>
.red-color {
  color: red;
}
</style>
