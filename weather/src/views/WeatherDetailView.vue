<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useConfigStore } from '../stores/configStore'
import { CITY_LIST } from '../config/weatherCities'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const cityDetail = ref(null)
const isLoading = ref(false)

const fetchDetail = async () => {
  const cityId = route.params.cityId
  const cityInfo = CITY_LIST.find((c) => c.id === cityId)
  if (!cityInfo) return
  isLoading.value = true
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { lat: cityInfo.lat, lon: cityInfo.lon, appid: API_KEY, units: 'metric', lang: 'kr' },
    })
    cityDetail.value = {
      region: `대한민국 ${cityInfo.name}`,
      temp: Math.round(response.data.main.temp),
      status: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    }
  } catch (error) {
    console.error('상세 날씨 데이터를 가져오는 중 에러가 발생했습니다:', error)
  } finally {
    isLoading.value = false
  }
}
onMounted(() => { fetchDetail() })

const displayTemp = computed(() => {
  if (!cityDetail.value) return null
  const rawTemp = cityDetail.value.temp
  if (configStore.unit === 'fahrenheit') return Math.round((rawTemp * 9) / 5 + 32)
  return rawTemp
})
const goBack = () => { router.push('/') }
</script>

<template>
  <div class="detail-page">
    <button class="back-btn" @click="goBack">← 대시보드로</button>

    <p v-if="isLoading" class="state-msg">불러오는 중...</p>

    <div v-else-if="cityDetail" class="detail-card">
      <p class="detail-region">{{ cityDetail.region }}</p>
      <p class="detail-temp">{{ displayTemp }}<span class="detail-unit">{{ configStore.unitSymbol }}</span></p>
      <p class="detail-status">{{ cityDetail.status }}</p>

      <div class="detail-stats">
        <div class="stat">
          <p class="stat-label">습도</p>
          <p class="stat-value">{{ cityDetail.humidity }}%</p>
        </div>
        <div class="stat">
          <p class="stat-label">풍속</p>
          <p class="stat-value">{{ cityDetail.windSpeed }} m/s</p>
        </div>
      </div>
    </div>

    <p v-else class="state-msg">해당 도시 정보를 찾을 수 없습니다.</p>
  </div>
</template>

<style scoped>
.detail-page {
  max-width: 480px;
  margin: 0 auto;
}

.back-btn {
  border: none;
  background: none;
  color: var(--color-primary-dark);
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.detail-card {
  background: var(--color-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: 40px 32px;
  text-align: center;
}

.detail-region {
  color: var(--color-text-light);
  font-weight: 600;
  margin: 0 0 8px;
}

.detail-temp {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin: 0;
}

.detail-unit {
  font-size: 1.6rem;
  color: var(--color-text-light);
  margin-left: 6px;
}

.detail-status {
  color: var(--color-text-light);
  margin: 8px 0 32px;
}

.detail-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  border-top: 1px solid #eee;
  padding-top: 24px;
}

.stat-label {
  color: var(--color-text-light);
  font-size: 0.85rem;
  margin: 0 0 4px;
}

.stat-value {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.state-msg {
  text-align: center;
  color: var(--color-text-light);
  padding: 60px 0;
}
</style>
