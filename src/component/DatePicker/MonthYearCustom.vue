<template>
  <div>
    <div class="p-2">
      <div class="flex items-center gap-1"><CalendarIcon class="w-4 h-4" /> Bügün</div>
      <div class="flex items-center gap-1"><SunIcon class="text-yellow-700 w-3 h-3" /> Yarın</div>
      <div class="flex items-center gap-1">
        <CalendarIcon class="text-red-600 w-4 h-4" /> Sonraki haftasunu
        <span @clear="clearValue" class="btn">Test Buton</span>
      </div>
      <hr />
    </div>
    <div class="month-year-wrapper">
      <div class="custom-month-year-component">
        <select
          class="select-input"
          :value="month"
          @change="$emit('update:month', +$event.target.value)"
        >
          <option v-for="m in months" :key="m.value" :value="m.value">{{ m.text }}</option>
        </select>
        <select
          class="select-input"
          :value="year"
          @change="$emit('update:year', +$event.target.value)"
        >
          <option v-for="y in years" :key="y.value" :value="y.value">{{ y.text }}</option>
        </select>
      </div>
      <div class="icons">
        <span class="custom-icon" @click="onPrev"><ChevronLeftIcon class="w-3 h-3" /></span>
        <span class="custom-icon" @click="onNext"><ChevronRightIcon class="w-3 h-3" /></span>
      </div>
    </div>
  </div>
</template>

<script>
// Icons used in the example, you can use your custom ones
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, SunIcon } from "@heroicons/vue/outline";

import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, SunIcon },
  emits: ["update:month", "update:year", "selectDate"],
  // Available props
  props: {
    months: { type: Array, default: () => [] },
    years: { type: Array, default: () => [] },
    filters: { type: Object, default: null },
    monthPicker: { type: Boolean, default: false },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    customProps: { type: Object, default: null },
  },
  setup(props, { emit }) {
    const updateMonthYear = (month, year) => {
      emit("update:month", month);
      emit("update:year", year);
    };

    const onNext = () => {
      let month = props.month;
      let year = props.year;
      if (props.month === 11) {
        month = 0;
        year = props.year + 1;
      } else {
        month += 1;
      }
      updateMonthYear(month, year);
    };

    const onPrev = () => {
      let month = props.month;
      let year = props.year;
      if (props.month === 0) {
        month = 11;
        year = props.year - 1;
      } else {
        month -= 1;
      }
      updateMonthYear(month, year);
    };
    const test = () => {
      console.log(new Date().toString());
      emit("selectDate", new Date());
    };

    return {
      onNext,
      onPrev,
      test,
    };
  },
});
</script>

<style >
</style>