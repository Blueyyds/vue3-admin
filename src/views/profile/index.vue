<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>Profile</span>
        </div>
      </template>
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </el-card>
  </div>
</template>

<script setup name="Profile"></script>

<style lang="scss"></style>
