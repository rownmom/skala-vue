<script setup>
import { ref } from 'vue'
import WeatherCard from './WeatherCard.vue'

const selectedCityInfo = ref('카드를 클릭해 보세요.')

const receiveCitySignal = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 성공적으로 선택되었습니다.`
}
</script>

<template>
  <div class="practice-section parent-box">
    <h2>defineEmits() Example 2</h2>
    <h3>👪 부모 관제탑 (Emits 수신 패널)</h3>
    <hr />

    <WeatherCard cityName="서울" status="맑음" @select-city="receiveCitySignal" />
    <WeatherCard cityName="수원" status="비" @select-city="receiveCitySignal" />

    <div class="status-bar">
      {{ selectedCityInfo }}
    </div>
  </div>
</template>

<style scoped>
.status-bar {
  background: #eafaf1;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;
}
</style>
