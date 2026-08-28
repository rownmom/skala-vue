<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import BaseDashboardCard from '../components/exercise/BaseDashboardCard.vue'
import SearchBar from '../components/exercise/SearchBar.vue'
import WeatherCard from '../components/exercise/WeatherCard.vue'
import { CITY_LIST } from '../config/weatherCities'

const router = useRouter()

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

const weatherList = ref([])
const isLoading = ref(false)
const searchQuery = ref('')
const selectedCityInfo = ref('')

// 컴포넌트 마운트 시, 등록된 도시들의 실제 날씨를 OpenWeatherMap에서 가져온다.
const fetchAllWeather = async () => {
  isLoading.value = true
  try {
    const requests = CITY_LIST.map((city) =>
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: city.lat,
          lon: city.lon,
          appid: API_KEY,
          units: 'metric',
          lang: 'kr',
        },
      }),
    )
    // 여러 개의 axios 요청을 한 번에 병렬 처리
    const responses = await axios.all(requests)

    weatherList.value = responses.map((response, index) => ({
      id: CITY_LIST[index].id,
      name: CITY_LIST[index].name,
      temp: Math.round(response.data.main.temp),
      status: response.data.weather[0].description,
    }))
  } catch (error) {
    console.error('날씨 데이터를 가져오는 중 에러가 발생했습니다:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchAllWeather()
})

const filteredList = computed(() => {
  if (!searchQuery.value) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchQuery.value))
})

const handleUpdateQuery = (newQuery) => {
  searchQuery.value = newQuery
}

const handleSelectCity = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

const handleClickDetail = (cityId) => {
  router.push('/weather/' + cityId)
}
</script>

<template>
  <div class="practice-section">
    <h2>과제 4,5,6: 라우터 + 스토어 + API 적용</h2>

    <p v-if="isLoading">실시간 날씨 데이터를 불러오는 중입니다...</p>

    <BaseDashboardCard title="도시 검색">
      <SearchBar :query="searchQuery" @update-query="handleUpdateQuery" />
    </BaseDashboardCard>

    <BaseDashboardCard title="지역별 날씨 현황">
      <WeatherCard v-for="city in filteredList" :key="city.id" :city="city" @select-city="handleSelectCity" @click-detail="handleClickDetail" />
    </BaseDashboardCard>

    <p v-if="selectedCityInfo" class="footer-msg">{{ selectedCityInfo }}</p>
  </div>
</template>

<style scoped>
.footer-msg {
  text-align: center;
  background: #eafaf1;
  padding: 10px;
  border-radius: 6px;
}
</style>
