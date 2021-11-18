<template>
  <div id="content" class="my-7 mx-32 w-full">
    <div class="border-b border-gray-200 border-opacity flex py-3">
      <div>
        <input
          v-model="open"
          class="form-checkbox rounded-full border border-gray-500 ring-0 w-[18px] h-[18px] mr-2"
          type="checkbox"
        />
      </div>
      <div>
        <span class="text-sm" :class="{ 'line-through': open }">Todo İtem 1</span>
        <div class="flex items-center gap-1 transition-all duration-1000" v-show="!open">
          <CalendarIcon class="w-3 h-3 text-red-700" />
          <span class="text-xs text-red-800">Dün</span>
        </div>
      </div>
    </div>
    <div>
      <div
        v-show="missionToggleAdd"
        class="flex flex-col border rounded mt-3 transition-all duration-1000"
      >
        <input
          class="outline-none w-full px-1 pl-2 pt-2"
          placeholder="ör., 2 günde bir Portekizce öğren #Öğrenme"
          type="text"
        />
        <textarea
          class="mt-2 px-2 w-full text-sm font-light outline-none resize-none"
          rows="3"
          placeholder="Açıklama"
        ></textarea>
        <div class="flex items-center justify-between">
          <div class="w-36 m-2 flex items-center relative">
            <Datepicker
              v-model="date"
              :clearable="true"
              ref="dp"
              :enableTimePicker="false"
              :format="format"
              :previewFormat="format"
            >
              <template #dp-input="{ value, onInput, onEnter, onTab }">
                <div class="flex items-center gap-2 p-1 border rounded text-sm font-light">
                  <CalendarIcon class="w-5 h-5" />
                  <input
                    placeholder="Zaman ayarla"
                    class="w-full outline-none"
                    type="text"
                    :value="value"
                  />
                </div>
              </template>
              <template #calendar-header="{ index, day }">
                <div :class="index === 5 || index === 6 ? 'red-color' : ''">
                  {{ day }}
                </div>
              </template>
              <template #action-select>
                <p class="bg-green-600 text-white text-center" @click="selectDate">Uygula</p>
              </template>
              <template #clear-icon> x </template>
            </Datepicker>
            <BackspaceIcon
              class="w-4 h-4 text-red-500 absolute right-2"
              v-show="date"
              @click="sil"
            />
          </div>
          <div class="space-x-2 mr-2">
            <button @click="sil" class="bg-red-600 text-white px-3 py-1 text-sm font-light">
              İptal
            </button>
            <button class="bg-green-600 text-white px-3 py-1 text-sm font-light">Kaydet</button>
          </div>
        </div>
      </div>

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
        /><span class="text-gray-500 text-sm group-hover:text-red-500 group-hover:transition-all"
          >Görev ekle</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, defineAsyncComponent } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { CalendarIcon, PlusIcon, BackspaceIcon } from "@heroicons/vue/outline";

import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

const ActionRow = defineAsyncComponent(() => import("./DatePicker/ActionRowCustom.vue"));

const MonthYear = defineAsyncComponent(() => import("./DatePicker/MonthYearCustom.vue"));
const monthYear = computed(() => MonthYear);

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
