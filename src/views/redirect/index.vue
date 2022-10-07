<script setup>
import { useRoute, useRouter } from 'vue-router'
console.log('redirect page')

const route = useRoute()
const router = useRouter()
const { params, query } = route
const { path } = params
console.log(path, query)
router.replace({ path, query })
</script>

<template>
  <div></div>
</template>
