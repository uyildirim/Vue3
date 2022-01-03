<template>
  <div class="w-[900px] flex-shrink-0">
    <div id="header" class="p-3 bg-gray-200">
      <Header />
    </div>
    <div id="content" class="flex justify-between">
      <BlogContent />
      <div class="w-3/12 flex-shrink-0">
        <BlogSidebar />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import BlogContent from "./BlogContent.vue";
import BlogSidebar from "./BlogSidebar.vue";
</script>

<style></style>
