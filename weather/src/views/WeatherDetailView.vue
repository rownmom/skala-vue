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
      params: {
        lat: cityInfo.lat,
        lon: cityInfo.lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'kr',
      },
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

onMounted(() => {
  fetchDetail()
})

const displayTemp = computed(() => {
  if (!cityDetail.value) return null
  const rawTemp = cityDetail.value.temp
  if (configStore.unit === 'fahrenheit') {
    return Math.round((rawTemp * 9) / 5 + 32)
  }
  return rawTemp
})

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="practice-section">
    <h2>지역별 상세 기상 관측 정보</h2>

    <p v-if="isLoading">데이터를 불러오는 중입니다...</p>

    <div v-else-if="cityDetail" class="detail-card">
      <p>📍 지정 지역: {{ cityDetail.region }}</p>
      <p>실시간 기온: {{ displayTemp }}{{ configStore.unitSymbol }}</p>
      <p>기상 현황: {{ cityDetail.status }}</p>
      <p>대기 습도: {{ cityDetail.humidity }}%</p>
      <p>현재 풍속: {{ cityDetail.windSpeed }}m/s</p>
    </div>
    <div v-else class="detail-card">해당 도시의 데이터를 찾을 수 없습니다.</div>

    <button @click="goBack">← 메인 대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.detail-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
