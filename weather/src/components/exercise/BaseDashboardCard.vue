<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="dashboard-card">
    <h2 v-if="title" class="dashboard-card__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<style scoped>
.dashboard-card {
  text-align: center;
}

.dashboard-card__title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 20px;
}
</style>
