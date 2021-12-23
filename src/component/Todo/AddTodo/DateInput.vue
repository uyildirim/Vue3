<template>
  <Datepicker
    class="text-sm"
    @input="$emit('update:modelValue', $event.target.value)"
    v-model="date"
    :enableTimePicker="false"
    ref="dp"
    :format="format"
    autoApply
    placeholder="Zamanı ayarla"
    :transitions="false"
  >
    <template #action-select>
      <p class="custom-select" @click="selectDate">Select</p>
    </template>
  </Datepicker>
</template>

<script setup>
import { ref } from "vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

const date = ref();
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

<style>
</style>