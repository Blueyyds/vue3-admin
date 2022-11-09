<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue';
import useAppStore from '@/stores/app';
import { UserFilled } from '@element-plus/icons-vue';
import useSettingStore from '@/stores/settings';
import router from '@/router';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import Setting from '../Setting/index.vue';

const appStore = useAppStore();
const settingStore = useSettingStore();
const route = useRoute();

const fullScreenHandler = () => {
  if (appStore.fullScreen) {
    appStore.exitFullscreen();
  } else {
    appStore.enterFullScreen();
  }
};

const fullScreenIcon = computed(() => {
  return appStore.fullScreen ? 'exit-fullscreen' : 'fullscreen';
});

const handleToggleLanguage = locale => {
  if (locale === settingStore.locale) return;
  settingStore.setLocale(locale);
  const { path, params, query } = route;
  params.path = path;
  console.log(params, query);
  router.replace({
    name: 'redirect',
    params,
    query,
  });
};

const shadow = computed(() => {
  if (appStore.hiddenSidebar) {
    return false;
  } else {
    return true;
  }
});

const settingDrawer = ref(false);
</script>

<template>
  <div
    class="navbar-panel"
    :style="{ 'box-shadow': shadow ? 'var(--el-box-shadow-light)' : '' }"
  >
    <!-- <div class="navbar-panel-item">
      <ToggleTheme />
    </div> -->
    <div class="navbar-panel-item">
      <SvgIcon name="desktop" :size="20" />
    </div>
    <div class="navbar-panel-item" @click="fullScreenHandler">
      <SvgIcon :name="fullScreenIcon" :size="20" />
    </div>
    <el-dropdown
      trigger="click"
      class="navbar-panel-item"
      placement="bottom-end"
      @command="handleToggleLanguage"
    >
      <SvgIcon class="language" name="language" :size="22" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zhCn">
            {{ $t('Chinese') }}
          </el-dropdown-item>
          <el-dropdown-item command="en">{{ $t('English') }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="navbar-panel-item">
      <SvgIcon name="guide" :size="20" />
    </div>
    <el-dropdown
      trigger="click"
      class="navbar-panel-item"
      placement="bottom-end"
    >
      <div style="display: flex; align-items: center; height: 100%">
        <el-avatar :size="24" :icon="UserFilled" />
        <span style="margin-left: 6px">Admin</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>项目地址</el-dropdown-item>
          <el-dropdown-item divided>Docs</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="navbar-panel-item" @click="settingDrawer = !settingDrawer">
      <SvgIcon name="setting" :size="20" />
    </div>
  </div>
  <el-drawer v-model="settingDrawer" title="Settings">
    <Setting />
  </el-drawer>
</template>

<style lang="scss" scoped>
.navbar-panel {
  background-color: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;

  .navbar-panel-item {
    height: 100%;
    text-align: center;
    padding: 0 12px;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: #f5f5f5;

      .el-icon {
        transform: scale(1.2);
      }
    }

    .el-icon {
      transition: all 0.2s;
      height: 80%;
    }
  }

  .navbar-panel-item-user {
    width: auto !important;
  }
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px 8px;
}
</style>

<style lang="scss">
.el-drawer__header {
  margin-bottom: 20px;
}
</style>
