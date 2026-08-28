<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => { router.push('/') }
</script>

<template>
  <div class="about-page">
    <h2>📄 서비스 소개</h2>
    <p>Skala Weather는 OpenWeatherMap API를 이용해 실시간 날씨 정보를 보여주는 대시보드입니다.</p>
    <ul>
      <li>도시별 실시간 기온, 날씨 상태 확인</li>
      <li>도시 이름 검색</li>
      <li>섭씨 / 화씨 단위 전환</li>
      <li>도시 클릭 시 상세 날씨 정보 확인</li>
    </ul>
    <button class="home-btn" @click="goHome">대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.about-page {
  background: var(--color-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: 40px;
  max-width: 560px;
  margin: 0 auto;
}

.about-page ul {
  color: var(--color-text-light);
  line-height: 1.8;
}

.home-btn {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.home-btn:hover {
  background: var(--color-primary-dark);
}
</style>
