<template>
  <input
    class="outline-none w-full px-1 pl-2 py-1 bg-yellow-100"
    placeholder="ör., 2 günde bir Portekizce öğren #Öğrenme"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(["modelValue"]);
</script>

<style>
</style>