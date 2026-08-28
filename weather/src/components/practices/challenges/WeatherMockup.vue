<script setup>
import { ref, computed } from 'vue'

// 1. 배열 렌더링용 데이터 (본인만의 데이터 1개 추가: 대전)
const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음' },
  { id: 'city_02', name: '수원', temp: 24, status: '비' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름' },
  { id: 'city_04', name: '대전', temp: 22, status: '맑음' },
])

// 3. 검색어 상태 (:value + @input 방식으로 양방향 처리)
const searchText = ref('')

// 4. 선택된 도시 상태
const selectedCity = ref('')

// 검색어로 필터링된 목록
const filteredList = computed(() => {
  if (!searchText.value) return weatherList.value
  return weatherList.value.filter((city) => city.name.includes(searchText.value))
})

// 카드 클릭 시 선택 상태 갱신
const selectCard = (cityName) => {
  selectedCity.value = cityName
}

// 상세보기 클릭 시 alert (버블링 막아서 selectCard와 중복 실행 방지는 stop으로 처리)
const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<template>
  <div class="practice-section weather-mockup">
    <h2>과제 1: 날씨 (Mockup)</h2>

    <div class="search-box">
      <h3>도시 검색</h3>
      <input type="text" :value="searchText" @input="(e) => (searchText = e.target.value)" placeholder="검색할 도시 이름 입력" />
      <p>
        검색 중인 도시: <strong>{{ searchText }}</strong>
      </p>
    </div>

    <div class="weather-list">
      <h3>지역별 날씨 현황</h3>
      <div v-for="city in filteredList" :key="city.id" class="weather-card" @click="selectCard(city.name)">
        <p class="city-name">{{ city.name }} ({{ city.status }})</p>
        <p>현재 기온: {{ city.temp }}°C</p>

        <span v-if="city.temp >= 25" class="badge hot">🌡 더움 (25도 이상)</span>
        <span v-else class="badge cool">❄ 선선함 (25도 미만)</span>

        <button @click.stop="showDetail(city.name, city.status)">상세보기</button>
      </div>
    </div>

    <p class="footer-msg">
      {{ selectedCity ? `'${selectedCity}'이(가) 선택되었습니다.` : '카드를 클릭하거나 검색해 보세요.' }}
    </p>
  </div>
</template>

<style scoped>
.weather-mockup {
  max-width: 420px;
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
</style>
