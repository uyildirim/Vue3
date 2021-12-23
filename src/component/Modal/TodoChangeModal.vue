<template>
  <div
    @click="modalClick"
    class="modal-overlay absolute inset-0 flex justify-center bg-[#000000da] z-10"
  >
    <div @click.stop class="absolute top-10 shadow rounded-md">
      <div class="bg-white px-5 py-5 w-[500px] space-y-2">
        <!-- model-header -->
        <div id="model-header" class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <FolderIcon class="w-5 h-5 inline-block" />
            <span>Klasör</span>{{ modalShow }}
          </div>
          <button @click="modalClick" class="hover:bg-gray-100">
            <XIcon class="h-5 w-5" />
          </button>
        </div>
        <!--End model-header -->
        <div class="flex space-x-4" v-show="modalShow">
          <div class="">
            <input class="w-5 h-5" type="checkbox" />
          </div>
          <div class="w-full" @click="modalShow = false">
            <div class="mb-2">
              <span class="font-semibold">{{ data.title }}</span>
            </div>
            <div class="mb-6">
              <span class="text-sm">{{ data.description }}</span>
            </div>
            <div id="date-time" class="flex items-center justify-between">
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
              <div @click.stop class="flex items-center text-gray-600">
                <Flag />
                <Tag />
              </div>
            </div>
          </div>
        </div>
        <AddTodoIndex v-show="!modalShow" @save="save" @cancel="modalShow = true" :item="data" />
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
import { provide, ref } from "vue";
import Flag from "../ActionGroup/Flag.vue";
import Tag from "../ActionGroup/Tag.vue";

const emit = defineEmits(["modal"]);
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

const modalShow = ref(true);
const modalClick = () => {
  modalShow.value = true;
  emit("modal", false);
};
</script>

<style scoped></style>
