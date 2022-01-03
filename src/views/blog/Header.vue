<template>
  <div class="flex justify-between">
    <div class="flex gap-2 items-center">
      <div><h1 class="font-medium text-lg">Vue3 Blog</h1></div>
      <div><a href="#" class="ml-3 bg-gray-50 px-3 py-1 rounded-lg">Home</a></div>
      <div>
        <router-link :to="{ name: 'AddPost' }" class="bg-gray-50 px-3 py-1 rounded-lg">
          Add Post
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'AddCategory' }" class="bg-gray-50 px-3 py-1 rounded-lg">
          Add Categories
        </router-link>
      </div>
    </div>
    <div>Search</div>
  </div>
</template>

<script setup></script>

<style></style>
