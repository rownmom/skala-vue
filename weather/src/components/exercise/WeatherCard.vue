<script setup>
import { computed } from 'vue'
import { useConfigStore } from '../../stores/configStore'

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['select-city', 'click-detail'])

const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.city.temp // 기본 원본 데이터는 섭씨 숫자
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32) // 화씨 변환 연산
  }
  return rawTemp // 'celsius'일 때는 원본 그대로 반환
})
</script>

<template>
  <div class="weather-card" @click="emit('select-city', city.name)">
    <p class="city-name">{{ city.name }} ({{ city.status }})</p>
    <p>현재 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
    <span v-if="city.temp >= 25" class="badge hot">🌡 더움</span>
    <span v-else class="badge cool">❄ 선선함</span>
    <button @click.stop="emit('click-detail', city.id)">상세보기</button>
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
