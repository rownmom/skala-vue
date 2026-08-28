<script setup>
defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-city', 'click-detail'])
</script>

<template>
  <div class="weather-card" @click="emit('select-city', city.name)">
    <p class="city-name">{{ city.name }} ({{ city.status }})</p>
    <p>현재 기온: {{ city.temp }}°C</p>
    <span v-if="city.temp >= 25" class="badge hot">🌡 더움</span>
    <span v-else class="badge cool">❄ 선선함</span>
    <button @click.stop="emit('click-detail', city.name, city.status)">상세보기</button>
  </div>
</template>

<style scoped>
.weather-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
}
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  margin-right: 8px;
  font-size: 13px;
}
.badge.hot {
  background-color: #e74c3c;
}
.badge.cool {
  background-color: #3498db;
}
</style>
