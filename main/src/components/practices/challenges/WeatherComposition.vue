<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

// 1. 반응형 상태 관리 (1일차와 동일한 원본 데이터)
const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '대전', temp: 22, status: '맑음' },
])

const searchQuery = ref('')
const selectedCityInfo = ref('')
const logs = ref([])

const addLog = (message) => {
  logs.value.unshift(message)
  if (logs.value.length > 8) logs.value.pop()
}

// 2. 검색어로 필터링된 도시 목록 (computed 활용)
const filteredWeatherList = computed(() => {
  if (!searchQuery.value) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchQuery.value))
})

// 3-1. selectedCityInfo 감시 (watch 이용)
watch(selectedCityInfo, (newVal) => {
  console.log('onChange started')
  console.log(`👁 [watch 감지] 상태바 문구가 업데이트되었습니다 -> '${newVal}'`)
  console.log('onChange completed')
  addLog(`👁 [watch 감지] 상태바 문구가 업데이트되었습니다 -> '${newVal}'`)
})

// 3-2. searchQuery 감시 (watchEffect 이용 - 타이핑할 때마다 자동 추적)
watchEffect(() => {
  addLog(`📡 [watchEffect 자동 호출] 현재 검색어 '${searchQuery.value}'에 매칭되는 API 데이터를 필터링...`)
})

const selectCard = (cityName) => {
  selectedCityInfo.value = `${cityName}이(가) 선택되었습니다.`
}

const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section weather-composition">
    <h2>과제 2: 날씨 (컴포지션)</h2>

    <div class="search-box">
      <h3>도시 검색</h3>
      <input type="text" v-model="searchQuery" placeholder="검색할 도시 이름 입력" />
      <p>
        검색 중인 도시: <strong>{{ searchQuery }}</strong>
      </p>
    </div>

    <div class="weather-list">
      <h3>지역별 날씨 현황</h3>

      <div v-if="filteredWeatherList.length === 0" class="no-result">검색어와 일치하는 도시가 없습니다.</div>

      <div v-for="city in filteredWeatherList" :key="city.id" class="weather-card" @click="selectCard(city.name)">
        <p class="city-name">{{ city.name }} ({{ city.status }})</p>
        <p>현재 기온: {{ city.temp }}°C</p>
        <span v-if="city.temp >= 25" class="badge hot">🌡 더움 (25도 이상)</span>
        <span v-else class="badge cool">❄ 선선함 (25도 미만)</span>
        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </div>
    </div>

    <p v-if="selectedCityInfo" class="footer-msg">{{ selectedCityInfo }}</p>

    <div class="log-panel">
      <p v-for="(log, idx) in logs" :key="idx">{{ log }}</p>
    </div>
  </div>
</template>

<style scoped>
.weather-composition {
  max-width: 460px;
}
.search-box input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
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
.footer-msg {
  text-align: center;
  background: #eafaf1;
  padding: 10px;
  border-radius: 6px;
}
.no-result {
  color: #999;
  padding: 10px;
}
.log-panel {
  margin-top: 12px;
  border: 1px solid #b3d7ff;
  background: #f0f7ff;
  padding: 8px;
  font-size: 12px;
  max-height: 150px;
  overflow-y: auto;
}
</style>
