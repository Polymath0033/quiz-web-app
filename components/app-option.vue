<script setup lang="ts">
defineProps<{ name: string; value: string; type: 'radio' | 'checkbox' }>()
</script>

<template>
  <label :for="name" >
    <input :type="type" :name="name" :id="name" :value="value" />
    <span></span>
  </label>
</template>

<style scoped></style>
