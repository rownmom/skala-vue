<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="practice-section">
    <h2>서비스 소개</h2>
    <div class="about-card">
      <p>본 앱은 Vue 3 & Vue Router 4 기본 챕터의 실습을 담은 가상 관측 대시보드 시스템입니다.</p>
      <p>components/exercise 하단의 재사용 컴포넌트를 활용합니다.</p>
      <p>클라이언트 사이드 라우팅을 통한 새로고침 없는 화면 전환이 가능합니다.</p>
      <p>URL 뒤에 도시 코드를 활용한 실시간 상세 정보 화면 동기화 기능도 있습니다.</p>
    </div>
    <button @click="goHome">대시보드 홀로 이동</button>
  </div>
</template>

<style scoped>
.about-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.about-card p {
  margin: 8px 0;
}
</style>
