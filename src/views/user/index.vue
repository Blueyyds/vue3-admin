<template>
  <Card title="menu.User">
    <el-table :data="userList" style="width: 100%" stripe>
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="real_name" label="真实姓名" />
      <el-table-column prop="gender" label="性别" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="phone" label="电话号码" />
      <el-table-column prop="role" label="角色" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            Edit
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </Card>
</template>

<script setup lang="ts">
import { getAllUsers } from '@/api/user';
import Card from '@/components/Card/index.vue';

const { data: userList } = await getAllUsers();
console.log(userList);

const handleEdit = (index, row) => {};
const handleDelete = (index, row) => {};
</script>

<style lang="scss"></style>
