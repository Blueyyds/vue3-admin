<template>
  <div class="navbar-panel">
    <div class="navbar-panel-item">
      <SvgIcon name="desktop" />
    </div>
    <div class="navbar-panel-item">
      <SvgIcon name="fullscreen" />
    </div>
    <div class="navbar-panel-item">
      <SvgIcon class="language" name="language"></SvgIcon>
    </div>
    <div class="navbar-panel-item">
      <SvgIcon name="guide"></SvgIcon>
    </div>
    <div class="navbar-panel-item navbar-panel-item-user" style="display: flex">
      <el-avatar :size="24" :icon="UserFilled" />
      <span style="margin-left: 4px">Admin</span>
    </div>
    <div class="navbar-panel-item">
      <SvgIcon name="setting"></SvgIcon>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { UserFilled } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.navbar-panel {
  box-shadow: var(--el-box-shadow-light);
  display: flex;
  align-items: center;
  padding-right: 4px;

  .navbar-panel-item {
    width: 50px;
    padding: 0 16px;
    &:hover {
      cursor: pointer;

      .svg-icon {
        transform: scale(1.3);
      }
    }

    .svg-icon {
      width: 1.4em;
      height: 1.4em;
      transition: all 0.2s;
    }

    .language {
      width: 1.5em;
      height: 1.5em;
    }
  }

  .navbar-panel-item-user {
    width: auto !important;
  }

  .navbar-panel-item-user-setting {
  }
}
</style>
