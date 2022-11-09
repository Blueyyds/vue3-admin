<template>
  <div>
    <template v-if="!item.hidden">
      <template
        v-if="
          hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
        "
      >
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <Item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </template>

      <el-sub-menu v-else :index="resolvePath(item.path)">
        <template #title>
          <Item
            v-if="item.meta"
            :icon="item.meta?.icon"
            :title="item.meta.title"
          />
        </template>
        <SidebarItem
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup name="SidebarItem">
import { isExternal } from '@/utils/validator';
import path from 'path-browserify';
import { ref } from 'vue';
import Item from './item.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: '',
  },
  isNest: {
    type: Boolean,
    default: false,
  },
});
const resolvePath = routePath => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};

const onlyOneChild = ref(null);

const hasOneShowingChild = (children = [], parent) => {
  const showingChildren = children.filter(item => {
    if (!item.hidden) {
      // Temp set(will be used if only has one showing child)
      onlyOneChild.value = item;
      return true;
    }
  });
  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    return true;
  }

  // Show parent if there are no child router to display
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
    return true;
  }

  return false;
};
</script>
