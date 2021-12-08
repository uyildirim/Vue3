<template>
  <div id="body" class="">
    <header-page />

    <div class="hcalc h-screen flex">
      <sidebar class="" />
      <content />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import HeaderPage from "./HeaderPage.vue";
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";

const test = (event) => {
  console.log(event);
};
</script>

<style scoped>
.hcalc {
  height: calc(100vh - 44px);
}
.project:before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: currentColor;
  border-radius: 50%;
}
</style>