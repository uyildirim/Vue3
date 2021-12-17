<template>
  <div class="flex items-center justify-between">
    <div class="m-2 flex items-center relative">
      <Datepicker v-model="date" :enableTimePicker="false" ref="dp">
        <template #action-select>
          <p class="custom-select" @click="selectDate">Select</p>
        </template>
      </Datepicker>

      <!-- <BackspaceIcon class="w-4 h-4 text-red-500 absolute right-2" v-show="date" @click="sil" /> -->
    </div>
    <div class="space-x-2 p-2">
      <button
        @click="$emit('cancel')"
        class="bg-red-600 text-white px-3 py-1 text-sm font-light"
      >
        İptal
      </button>
      <button
        @click="$emit('save')"
        class="bg-green-600 text-white px-3 py-1 text-sm font-light"
      >
        Kaydet
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

const date = ref(new Date());
const dp = ref();
const selectDate = () => {
  dp.value.selectDate();
};
</script>

<style></style>
