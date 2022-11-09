<template>
  <div class="app-main">
    <keep-alive>
      <transition name="fade-transform">
        <Card :title="title">
          <router-view :key="key"></router-view>
        </Card>
      </transition>
    </keep-alive>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Card from '@/components/Card/index.vue';

const route = useRoute();
const key = computed(() => route.path);
const title = computed(() => 'menu.' + route.meta.title);
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
