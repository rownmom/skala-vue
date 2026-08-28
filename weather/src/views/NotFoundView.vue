<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => { router.push('/') }
</script>

<template>
  <div class="notfound-page">
    <p class="notfound-emoji">🌫️</p>
    <h2>페이지를 찾을 수 없습니다</h2>
    <p>요청하신 페이지가 존재하지 않아요.</p>
    <button class="home-btn" @click="goHome">대시보드로 돌아가기</button>
  </div>
</template>

<style scoped>
.notfound-page {
  text-align: center;
  background: var(--color-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: 60px 40px;
  max-width: 480px;
  margin: 0 auto;
}

.notfound-emoji {
  font-size: 3rem;
  margin: 0 0 12px;
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
