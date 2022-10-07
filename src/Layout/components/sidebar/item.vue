<script setup name="MenuItem">
import SvgIcon from '@/components/SvgIcon/index.vue'
defineProps({
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <SvgIcon :name="icon" />
    <span style="margin-left: 8px">{{ $t(`menu.${title}`) }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
