<template>
  <div class="app-main">
    <router-view :key="key" v-slot="{ Component }">
      <Suspense>
        <transition>
          <component :is="Component" />
        </transition>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const key = computed(() => route.path);
</script>

<style lang="scss" scoped>
.app-main {
  height: 100%;
  padding: 16px;
  .el-scrollbar {
    height: calc(100%);
    // margin: 16px;
  }
}
</style>
