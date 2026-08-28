<script setup>
defineProps({
  query: String,
})

const emit = defineEmits(['update-query'])
</script>

<template>
  <div class="search-bar">
    <input type="text" :value="query" @input="emit('update-query', $event.target.value)" placeholder="검색할 도시 이름 입력" />
    <p>
      검색 중인 도시: <strong>{{ query }}</strong>
    </p>
  </div>
</template>

<style scoped>
.search-bar input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
