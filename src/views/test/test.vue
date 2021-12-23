<template>
  <div>
    <button class="btn" @click="openClick">Test Button</button>
    <div>
      <!-- {{ open }} -->
      <Acomponent />
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import Acomponent from "./Acomponent.vue";

const open = ref(true);
const openClick = () => {
  open.value = !open.value;
};
provide("open", open);
console.log(open.value);
</script>

<style>
</style>