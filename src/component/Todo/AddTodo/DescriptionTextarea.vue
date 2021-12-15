<template>
  <textarea
    class="py-2 px-2 w-full text-sm font-light outline-none resize-none bg-indigo-100"
    rows="3"
    placeholder="Açıklama"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>
defineProps(["modelValue"]);
</script>

<style>
</style>