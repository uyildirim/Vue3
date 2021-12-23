<template>
  <div>
    {{ openInject }}
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
const openInject = inject("open");
const testInject = ref();
</script>

<style>
</style>