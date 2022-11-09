<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>{{ $t(title) }}</span>
      </div>
    </template>
    <el-scrollbar :height="height">
      <Suspense>
        <slot></slot>
        <template #fallback>Loading...</template>
      </Suspense>
    </el-scrollbar>
  </el-card>
</template>

<script setup name="Card">
defineProps({
  title: {
    type: String,
    required: true,
  },
});

const height = document.documentElement.clientHeight - 62 - 32;
</script>

<style lang="scss">
.el-card {
  height: 100%;

  &__body {
    padding: 0 !important;
  }
}

.app-main .el-scrollbar {
  padding: 16px;
  height: 100%;

  &__wrap {
    max-height: 100% !important;
  }
}

.el-card__body {
  padding: 0;
}
</style>
