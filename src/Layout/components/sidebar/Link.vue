<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { isExternal } from '@/utils/validator'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
const isExternalRes = computed(() => isExternal(props.to))
const type = computed(() => {
  if (isExternalRes.value) {
    return 'a'
  }
  return 'router-link'
})
const linkProps = to => {
  if (isExternalRes.value) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener',
    }
  } else {
    return { to }
  }
}
</script>
