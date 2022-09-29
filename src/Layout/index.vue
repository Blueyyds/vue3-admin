<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '270px'">
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
import Sidebar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar/index.vue'
import useAppStore from '@/stores/app'
import { computed } from 'vue'

const appStore = useAppStore()
const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})
</script>

<script>
import resizeMixin from './mixin/resizeHandler'
export default {
  mixins: [resizeMixin],
}
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
