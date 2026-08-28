<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const userForm = ref({
  email: '',
  agree: false,
})

const handleRegister = () => {
  if (!userForm.value.email) {
    ElMessage.warning('이메일을 입력해주세요.')
    return
  }
  if (!userForm.value.agree) {
    ElMessage.error('약관에 동의해야 가입할 수 있습니다.')
    return
  }
  ElMessage.success(`${userForm.value.email}님, 가입이 완료되었습니다!`)
}
</script>

<template>
  <el-card style="max-width: 480px; margin-bottom: 20px">
    <h3>실습 1: 회원가입 Form</h3>
    <div style="margin: 12px 0">
      <p>이메일</p>
      <el-input v-model="userForm.email" placeholder="이메일을 입력하세요" />
    </div>
    <div style="margin: 12px 0; display: flex; align-items: center; gap: 8px">
      <span>약관 동의</span>
      <el-switch v-model="userForm.agree" />
    </div>
    <el-button type="primary" @click="handleRegister">가입하기</el-button>
  </el-card>
</template>
