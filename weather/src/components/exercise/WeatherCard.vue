<script setup>
import { computed } from 'vue'
import { useConfigStore } from '../../stores/configStore'

const props = defineProps({ city: { type: Object, required: true } })
const emit = defineEmits(['select-city', 'click-detail'])
const configStore = useConfigStore()

const displayTemp = computed(() => {
  const rawTemp = props.city.temp
  if (configStore.unit === 'fahrenheit') return Math.round((rawTemp * 9) / 5 + 32)
  return rawTemp
})

const weatherIcon = computed(() => {
  const status = props.city.status || ''
  if (status.includes('눈')) return '❄️'
  if (status.includes('비')) return '🌧️'
  if (status.includes('구름') || status.includes('흐')) return '☁️'
  if (status.includes('맑')) return '☀️'
  return '🌤️'
})
</script>

<template>
  <div class="weather-card" @click="emit('select-city', city.name)">
    <div class="weather-card__top">
      <p class="weather-card__city">{{ city.name }}</p>
      <span class="weather-card__icon">{{ weatherIcon }}</span>
    </div>
    <p class="weather-card__temp">{{ displayTemp }}<span class="weather-card__unit">{{ configStore.unitSymbol }}</span></p>
    <p class="weather-card__status">{{ city.status }}</p>
    <span v-if="city.temp >= 25" class="badge badge--hot">🌡 더움</span>
    <span v-else class="badge badge--cool">❄ 선선함</span>
    <button class="weather-card__btn" @click.stop="emit('click-detail', city.id)">상세보기</button>
  </div>
</template>

<style scoped>
.weather-card {
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-soft);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.weather-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(31, 41, 55, 0.14);
}

.weather-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.weather-card__city {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.weather-card__icon {
  font-size: 1.8rem;
}

.weather-card__temp {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 12px 0 0;
  color: var(--color-primary-dark);
}

.weather-card__unit {
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 4px;
  color: var(--color-text-light);
}

.weather-card__status {
  color: var(--color-text-light);
  margin: 4px 0 16px;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.badge--hot {
  background: #ffe4d6;
  color: #d1611f;
}

.badge--cool {
  background: #dceeff;
  color: #2c5fb0;
}

.weather-card__btn {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;
}

.weather-card__btn:hover {
  background: var(--color-primary-dark);
}
</style>
