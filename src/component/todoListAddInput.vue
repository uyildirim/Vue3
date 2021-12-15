<template>
  <div
    @click="missionToggleAdd = !missionToggleAdd"
    class="flex gap-2 items-center mt-2 group cursor-pointer"
  >
    <PlusIcon
      class="
        w-4
        h-4
        text-red-500 text-sm
        group-hover:bg-red-500
        group-hover:text-white
        group-hover:rounded-full
        group-hover:transition-all
        group-hover:p-1
      "
    />
    <span class="text-gray-500 text-sm group-hover:text-red-500 group-hover:transition-all">
      Görev ekle
    </span>
  </div>
</template>

<script setup>
import { PlusIcon } from "@heroicons/vue/outline";
</script>

<style>
</style>