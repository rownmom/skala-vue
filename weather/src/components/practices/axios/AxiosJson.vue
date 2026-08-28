<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 1. 백엔드 공용 주소
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

// 2. 반응형 상태 데이터
const items = ref([]) // 서버에서 받은 데이터 배열 박스
const textInput = ref('') // 입력창과 연결된 글자 데이터 박스

// [READ] GET: 데이터 가져오기
const handleRead = async () => {
  try {
    // 공부용으로 딱 3개만 들고 옵니다.
    const response = await axios.get(BASE_URL, { params: { _limit: 3 } })
    items.value = response.data
    console.log('GET 성공:', response.data)
  } catch (error) {
    console.error('GET 실패:', error)
  }
}

// [CREATE] POST: 새 데이터 등록
const handleCreate = async () => {
  if (!textInput.value) return
  try {
    const response = await axios.post(BASE_URL, {
      title: textInput.value,
      body: '날씨현황',
      userId: 1,
    })
    console.log('POST 성공:', response.data)
    // 실제 서버엔 저장 안 되므로(가짜 API), 화면에는 직접 추가해서 보여줌
    items.value.unshift(response.data)
    textInput.value = ''
  } catch (error) {
    console.error('POST 실패:', error)
  }
}

// [UPDATE] PUT: 데이터 수정
const handleUpdate = async (item) => {
  try {
    const response = await axios.put(`${BASE_URL}/${item.id}`, {
      title: '수정도시',
      body: '수정현황',
    })
    console.log('PUT 성공:', response.data)
    const target = items.value.find((i) => i.id === item.id)
    if (target) {
      target.title = response.data.title
      target.body = response.data.body
    }
  } catch (error) {
    console.error('PUT 실패:', error)
  }
}

// [DELETE] DELETE: 데이터 삭제
const handleDelete = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`)
    console.log('DELETE 성공: id', id)
    items.value = items.value.filter((i) => i.id !== id)
  } catch (error) {
    console.error('DELETE 실패:', error)
  }
}

onMounted(() => {
  handleRead()
})
</script>

<template>
  <div class="practice-section">
    <h2>⚡ Axios CRUD 프로토타입 훈련</h2>

    <div class="input-row">
      <input type="text" v-model="textInput" placeholder="저장할 텍스트를 입력하세요" />
      <button @click="handleCreate" class="btn-post">POST (추가)</button>
    </div>

    <div v-for="item in items" :key="item.id" class="item-row">
      <p>ID: {{ item.id }}</p>
      <p>{{ item.title }}</p>
      <button @click="handleUpdate(item)" class="btn-put">PUT (수정)</button>
      <button @click="handleDelete(item.id)" class="btn-del">DEL (삭제)</button>
    </div>
  </div>
</template>

<style scoped>
.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.input-row input {
  flex: 1;
  padding: 8px;
}
.item-row {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.btn-post {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-put {
  background-color: #f39c12;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-del {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
