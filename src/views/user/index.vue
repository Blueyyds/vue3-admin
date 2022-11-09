<template>
  <Card title="menu.User"></Card>
</template>

<script setup lang="ts">
import { getAllUsers } from '@/api/user';
import Card from '@/components/Card/index.vue';

const { data: userList } = await getAllUsers();
console.log(userList);
</script>

<style lang="scss" scoped></style>
