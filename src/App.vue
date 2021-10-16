<template>
  <div class="h-full">
    <div id="nav" class="flex ml-2 space-x-2 h-10 bg-gray-50 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup></script>

<style></style>
