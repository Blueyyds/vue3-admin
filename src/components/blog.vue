<script setup>
import { parseTime } from '@/utils/index'
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
  },
})

const createdAt = new Date()
const now = ref(parseTime(createdAt))
</script>

<template>
  <div class="blog-wrapper">
    <el-card>
      <div>{{ title }}</div>
      <div>{{ now }}</div>
      <div>{{ $translate('greetings.hello') }}</div>
      <el-button @click="$emit('enlarge-text')">放大字体</el-button>
    </el-card>
  </div>
</template>

<style scoped>
.blog-wrapper {
  margin: 0 20px 20px 0;
}
</style>
