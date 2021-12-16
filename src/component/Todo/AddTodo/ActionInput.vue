<template>
  <div class="flex items-center justify-between">
    <div class="w-36 m-2 flex items-center relative">
      <!-- <Datepicker
        v-model="addTodoItem.date"
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
      </Datepicker> -->
      <!-- <BackspaceIcon class="w-4 h-4 text-red-500 absolute right-2" v-show="date" @click="sil" /> -->
    </div>
    <div class="space-x-2 mr-2">
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

const dp = ref();
</script>

<style></style>
