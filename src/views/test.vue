<template>
  <div>
    <button class="btn" @click="$emit('tikla', 'TEst')">Test Button</button>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style>
</style>