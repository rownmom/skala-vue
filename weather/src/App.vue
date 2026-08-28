<script setup>
import { RouterLink, RouterView } from 'vue-router'
import UnitToggler from './components/exercise/UnitToggler.vue'
</script>

<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="app-header__inner">
        <RouterLink to="/" class="brand">🌤 Skala Weather</RouterLink>
        <nav class="app-nav">
          <RouterLink to="/" class="nav-link">대시보드</RouterLink>
          <RouterLink to="/about" class="nav-link">서비스 소개</RouterLink>
        </nav>
        <UnitToggler />
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      <p>© 2026 Skala Weather · OpenWeatherMap API 기반</p>
    </footer>
  </div>
</template>

<style>
:root {
  --color-bg-top: #eaf4ff;
  --color-bg-bottom: #dbe9ff;
  --color-primary: #3b7ddd;
  --color-primary-dark: #2c5fb0;
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-card: #ffffff;
  --shadow-soft: 0 8px 24px rgba(31, 41, 55, 0.08);
  --radius-lg: 20px;
  --radius-md: 14px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
  background: linear-gradient(180deg, var(--color-bg-top) 0%, var(--color-bg-bottom) 100%);
  color: var(--color-text);
  min-height: 100vh;
}

.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

.app-header {
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 12px rgba(31, 41, 55, 0.06);
}

.app-header__inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 32px;
}

.brand {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  text-decoration: none;
}

.app-nav {
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  padding: 8px 16px;
  border-radius: 999px;
  text-decoration: none;
  color: var(--color-text-light);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: rgba(59, 125, 221, 0.1);
  color: var(--color-primary-dark);
}

.router-link-active.nav-link {
  background: var(--color-primary);
  color: #fff;
}

.app-main {
  flex: 1;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 20px 60px;
}

.app-footer {
  width: 100%;
  text-align: center;
  padding: 20px;
  color: var(--color-text-light);
  font-size: 0.8rem;
}
</style>
