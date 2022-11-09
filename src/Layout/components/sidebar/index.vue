<template>
  <div class="sidebar-container">
    <Logo />
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        router
        :collapse-transition="false"
      >
        <SidebarItem
          v-for="route in permissionStore.routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import useAppStore from '@/stores/app';
import usePermissonStore from '@/stores/permisson';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Logo from './logo.vue';
import SidebarItem from './sidebarItem.vue';

const appStore = useAppStore();
const permissionStore = usePermissonStore();
const route = useRoute();

const isCollapse = computed(() => {
  return !appStore.sidebar.opened;
});
const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>

<style lang="scss">
.sidebar-container {
  height: 100%;
  .el-scrollbar {
    padding: 0 !important;
    background-color: #fff !important;
    height: calc(100% - 52px);

    .el-menu {
      border-radius: 4px;
      border-right: none;
    }
  }
}
</style>
