<script setup>
import { useConfigStore } from '../../stores/configStore'
const configStore = useConfigStore()
</script>

<template>
  <button class="unit-toggle" @click="configStore.toggleUnit">
    <span class="unit-toggle__label">{{ configStore.unit === 'celsius' ? '섭씨 ℃' : '화씨 ℉' }}</span>
    <span class="unit-toggle__icon">🔄</span>
  </button>
</template>

<style scoped>
.unit-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  border-radius: 999px;
  background: #fff;
  color: var(--color-primary-dark);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
  transition: transform 0.15s ease;
}

.unit-toggle:hover {
  transform: translateY(-1px);
}
</style>
