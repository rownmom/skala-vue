<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const receivedMessage = ref('아직 메시지 없음')

const handleChildEvent = (message) => {
  console.log('자식으로부터 받은 메시지:', message)
  receivedMessage.value = message
}
</script>

<template>
  <div class="practice-section">
    <h2>defineEmits() Example 1</h2>
    <ChildComponent @childEvent="handleChildEvent" />
    <p>
      받은 메시지: <strong>{{ receivedMessage }}</strong>
    </p>
  </div>
</template>
