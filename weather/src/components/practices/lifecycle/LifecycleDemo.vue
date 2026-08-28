<script setup>
import { ref } from 'vue'
import LifecycleHook from './LifecycleHook.vue'

const showComponent = ref(true)
</script>

<template>
  <div class="practice-section">
    <h2>Lifecycle Hook</h2>
    <button @click="showComponent = !showComponent">실습 컴포넌트 파괴하기 (v-if="false")</button>

    <LifecycleHook v-if="showComponent" />
  </div>
</template>
