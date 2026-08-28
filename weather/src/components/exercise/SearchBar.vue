<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update-query'])

const onInput = (event) => {
  emit('update-query', event.target.value)
}
</script>

<template>
  <div class="search-bar">
    <span class="search-bar__icon">🔍</span>
    <input
      class="search-bar__input"
      type="text"
      placeholder="도시 이름으로 검색 (예: 서울)"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 999px;
  padding: 12px 20px;
  box-shadow: var(--shadow-soft);
  margin-bottom: 24px;
}

.search-bar__input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.95rem;
  background: transparent;
  color: var(--color-text);
}

.search-bar__input::placeholder {
  color: var(--color-text-light);
}
</style>
