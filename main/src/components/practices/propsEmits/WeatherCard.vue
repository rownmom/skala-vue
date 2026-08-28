<script setup>
// 부모에게 물려받은 Props
defineProps({
  cityName: String,
  status: String,
})

// 부모에게 전달할 커스텀 이벤트 타입을 배열로 등록
const emit = defineEmits(['select-city'])

// 카드가 클릭되었을 때 실행될 함수
const handleCardClick = (name) => {
  emit('select-city', name)
}
</script>

<template>
  <div class="weather-card" @click="handleCardClick(cityName)">
    <h4>{{ cityName }} ({{ status }})</h4>
    <p>클릭하면 부모에게 신호를 보냅니다.</p>
  </div>
</template>

<style scoped>
.weather-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
  cursor: pointer;
}
</style>
