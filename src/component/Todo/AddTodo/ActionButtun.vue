<template>
  <div class="space-x-2 mt-2">
    <button
      @click="$emit('save')"
      class="bg-red-500 border border-red-500 text-gray-50 py-1 px-3 rounded"
    >
      Kaydet
    </button>
    <button @click="$emit('cancel')" class="text-gray-600 py-1 px-3 rounded border border-gray-300">
      İptal
    </button>
  </div>
</template>

<script setup>
</script>

<style>
</style>