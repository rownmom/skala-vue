<script setup>
import { ref, computed } from 'vue'

const productQuantity = ref(1)
const productRate = ref(0)

const setRate = (value) => {
  productRate.value = value
}

const totalPrice = computed(() => productQuantity.value * 10000)
</script>

<template>
  <el-card style="max-width: 480px; margin-bottom: 20px">
    <h3>실습 2: 상품 수량 & 평점</h3>
    <div style="margin: 12px 0">
      <p>수량</p>
      <el-input-number v-model="productQuantity" :min="1" :max="10" />
    </div>
    <div style="margin: 12px 0">
      <p>평점</p>
      <span v-for="star in 5" :key="star" style="cursor: pointer; font-size: 22px" @click="setRate(star)">
        {{ star <= productRate ? '⭐' : '☆' }}
      </span>
    </div>
    <p>선택한 평점: {{ productRate }}점</p>
    <p>총 금액: {{ totalPrice.toLocaleString() }}원</p>
  </el-card>
</template>
