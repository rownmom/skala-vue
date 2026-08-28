<script setup>
import { ref, computed } from 'vue'
import BaseDashboardCard from './BaseDashboardCard.vue'
import SearchBar from './SearchBar.vue'
import WeatherCard from './WeatherCard.vue'

const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
])

const searchQuery = ref('')
const selectedCityInfo = ref('')

const filteredList = computed(() => {
  if (!searchQuery.value) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchQuery.value))
})

// SearchBar가 update-query를 emit하면 실행
const handleUpdateQuery = (newQuery) => {
  searchQuery.value = newQuery
}

// WeatherCard가 select-city를 emit하면 실행 (카드 클릭)
const handleSelectCity = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

// WeatherCard가 click-detail을 emit하면 실행 (상세보기 버튼)
const handleClickDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section">
    <h2>과제 3: 날씨 (컴포넌트)</h2>

    <BaseDashboardCard title="도시 검색 (한글 즉시 동기화)">
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
