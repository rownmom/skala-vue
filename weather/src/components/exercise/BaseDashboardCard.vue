<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="dashboard-card">
    <h3>{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<style scoped>
.dashboard-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
}
</style>
