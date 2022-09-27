<script setup>
import { ref } from 'vue'
import Blog from './components/blog.vue'
import useCounterStore from './stores/counter'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])

const postFontSize = ref(1)
const show = ref(true)
const counterStore = useCounterStore()
function reset() {
  console.log('reset')
  counterStore.$reset()
}
</script>

<template>
  <el-container direction="horizontal">
    <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-outter"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-menu-item index="1-4">item four</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><Menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container direction="vertical">
      <el-header>Header</el-header>
      <el-main>
        <el-card>
          <el-row>
            <Blog
              v-for="post in posts"
              :key="post.id"
              :title="post.title"
              @enlarge-text="postFontSize += 0.1"
              :style="{ fontSize: postFontSize + 'em' }"
            />
          </el-row>
          <el-row>
            <Transition name="slide-fade">
              <p v-if="show">hello</p>
            </Transition>
          </el-row>
          <el-row>
            <el-button @click="show = !show">control</el-button>
          </el-row>
          <el-row>
            <el-card>
              <el-row>count: {{ counterStore.count }}</el-row>
              <el-row>
                <el-button @click="counterStore.count = counterStore.count + 1">
                  Add Count
                </el-button>
                <el-button @click="reset">Reset</el-button>
              </el-row>
            </el-card>
          </el-row>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-menu-outter {
  height: 100vh !important;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
