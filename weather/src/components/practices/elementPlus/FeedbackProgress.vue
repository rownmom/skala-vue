<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const downloadProgress = ref(0)
const isDownloading = ref(false)

const confirmDelete = () => {
  ElMessageBox.confirm('정말 삭제하시겠습니까?', '삭제 확인', {
    confirmButtonText: '삭제',
    cancelButtonText: '취소',
    type: 'warning',
  })
    .then(() => {
      ElMessage.success('삭제되었습니다.')
    })
    .catch(() => {
      ElMessage.info('삭제를 취소했습니다.')
    })
}

const startDownload = () => {
  if (isDownloading.value) return
  isDownloading.value = true
  downloadProgress.value = 0

  const timer = setInterval(() => {
    downloadProgress.value += 10
    if (downloadProgress.value >= 100) {
      clearInterval(timer)
      isDownloading.value = false
      ElMessage.success('다운로드 완료!')
    }
  }, 300)
}
</script>

<template>
  <el-card style="max-width: 480px; margin-bottom: 20px">
    <h3>실습 3: 피드백 & 프로그레스</h3>
    <el-progress :percentage="downloadProgress" style="margin: 12px 0" />
    <div style="display: flex; gap: 8px">
      <el-button type="primary" :disabled="isDownloading" @click="startDownload"> 다운로드 시작 </el-button>
      <el-button type="danger" @click="confirmDelete">삭제하기</el-button>
    </div>
  </el-card>
</template>
