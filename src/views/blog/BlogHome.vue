<template>
  <div class="w-[1200px] flex-shrink-0">
    <div id="header" class=" ">
      <Header />
    </div>
    <Banner class="w-full" />
    <div id="content" class="flex">
      <BlogContent class="w-[792px]" />
      <BlogSidebar class="w-[384]" />
    </div>
    <div></div>
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import BlogContent from "./BlogContent.vue";
import BlogSidebar from "./BlogSidebar.vue";
import Banner from "./Banner.vue";
</script>

<style></style>
