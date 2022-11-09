<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '240px'" class="hidden-xs-only">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header height="70px">
          <Navbar />
        </el-header>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar/index.vue';
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar/index.vue';
import useAppStore from '@/stores/app';
import { computed, watch } from 'vue';
import { useResizeHandler } from './composition/resizeHandler';
import { useRoute } from 'vue-router';

const appStore = useAppStore();
const route = useRoute();
const isCollapse = computed(() => {
  return !appStore.sidebar.opened;
});
useResizeHandler();
watch(route, () => {
  if (appStore.device === 'mobile' && appStore.sidebar.opened) {
    appStore.closeSidebar({ withoutAnimation: false });
  }
});
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  .el-aside {
    margin: 16px;
    margin-right: 0;
    box-shadow: var(--el-box-shadow-light);
    transition: all 0.3s;
  }
  .el-header {
    padding: 0;
  }

  .el-main {
    padding: 0 !important;
  }
}
</style>
