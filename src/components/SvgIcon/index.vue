<script setup name="SvgIcon">
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: Number,
    default: 16,
  },
});

const symbolId = computed(() => {
  if (props.name.includes('el-icon')) {
    return props.name.split('-')[2];
  } else {
    return `#${props.prefix}-${props.name}`;
  }
});
const isElIcon = computed(() => props.name.includes('el-icon'));
</script>

<template>
  <el-icon :size="size">
    <component v-if="isElIcon" :is="symbolId"></component>
    <svg v-else aria-hidden="true" class="svg-icon">
      <use :xlink:href="symbolId" />
    </svg>
  </el-icon>
</template>

<style>
svg {
  pointer-events: none;
}
</style>
