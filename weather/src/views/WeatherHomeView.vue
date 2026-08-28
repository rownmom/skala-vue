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

const fetchAllWeather = async () => {
  isLoading.value = true
  try {
    const requests = CITY_LIST.map((city) =>
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: { lat: city.lat, lon: city.lon, appid: API_KEY, units: 'metric', lang: 'kr' },
      }),
    )
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
onMounted(() => { fetchAllWeather() })

const filteredList = computed(() => {
  if (!searchQuery.value) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchQuery.value))
})
const handleUpdateQuery = (newQuery) => { searchQuery.value = newQuery }
const handleSelectCity = (cityName) => { selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.` }
const handleClickDetail = (cityId) => { router.push('/weather/' + cityId) }
</script>

<template>
  <BaseDashboardCard title="🌤 날씨 대시보드">
    <SearchBar :model-value="searchQuery" @update-query="handleUpdateQuery" />

    <p v-if="isLoading" class="state-msg">날씨 정보를 불러오는 중...</p>

    <div v-else class="weather-grid">
      <WeatherCard
        v-for="city in filteredList"
        :key="city.id"
        :city="city"
        @select-city="handleSelectCity"
        @click-detail="handleClickDetail"
      />
    </div>

    <p v-if="!isLoading && filteredList.length === 0" class="state-msg">검색 결과가 없습니다.</p>
    <p v-if="selectedCityInfo" class="footer-msg">{{ selectedCityInfo }}</p>
  </BaseDashboardCard>
</template>

<style scoped>
.weather-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 240px));
  justify-content: center;
  gap: 20px;
}

.state-msg {
  color: var(--color-text-light);
  padding: 40px 0;
  text-align: center;
}

.footer-msg {
  margin-top: 24px;
  padding: 14px 18px;
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-soft);
  color: var(--color-primary-dark);
  font-weight: 600;
  text-align: center;
}
</style>
