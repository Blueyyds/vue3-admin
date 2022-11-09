<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>{{ $t(title) }}</span>
      </div>
    </template>
    <div class="content">
      <el-scrollbar :height="height">
        <div>
          <slot></slot>
        </div>
      </el-scrollbar>
    </div>
  </el-card>
</template>

<script setup name="Card">
defineProps({
  title: {
    type: String,
    required: true,
  },
});

const height = document.documentElement.clientHeight - 70 - 62 - 64;
console.log(height);
</script>

<style lang="scss">
.el-card {
  height: 100%;
}

.content > .el-scrollbar {
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
