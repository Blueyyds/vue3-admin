<template>
  <div
    class="toggle-theme"
    :class="{ 'is-checked': state }"
    @click="toggleTheme"
  >
    <div class="slider df-center">
      <SvgIcon v-if="!state" name="sun" />
      <SvgIcon v-else name="dark" />
    </div>
  </div>
</template>

<script setup>
import useSettingStore from '@/stores/settings';
import { computed } from 'vue';
import SvgIcon from '../SvgIcon/index.vue';
import { useDark, useToggle } from '@vueuse/core';

const settingStore = useSettingStore();
const state = computed(() => {
  return settingStore.theme === 'light' ? false : true;
});
const toggleTheme = () => {
  settingStore.theme = settingStore.theme === 'light' ? 'dark' : 'light';

  const isDark = useDark();
  const toggleDark = useToggle(isDark);
};
</script>

<style lang="scss" scoped>
.toggle-theme {
  width: 40px;
  height: 20px;
  background-color: var(--color-background-mute);
  border: 1px solid --border-color;
  border-radius: 10px;
  cursor: pointer;
  padding: 2px;
  transition: all 0.3s;

  &.is-checked {
    background-color: var(--el-color-black);

    .slider {
      transform: translateX(20px);
    }
  }

  .slider {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--el-color-white);
    transition: all 0.3s;
  }
}
</style>
