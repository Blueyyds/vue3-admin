<template>
  <div>
    <ul>
      <li
        v-for="icon in icons"
        :key="icon"
        @click="handleClipboard(generateText(icon), $event)"
      >
        <SvgIcon :name="icon" :size="32" />
        <div style="margin-top: 8px">
          {{ icon }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup name="Icons">
import SvgIcon from '@/components/SvgIcon/index.vue';
import handleClipboard from '@/utils/clipboard';

const modulesFiles = import.meta.globEager('@/icons/svg/*.svg');
const generateText = name => {
  return `<SvgIcon name="${name}" />`;
};

const icons = Object.keys(modulesFiles).map(item => {
  return item.split('/')[4].split('.')[0];
});
console.log(icons);
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 85px;
    cursor: pointer;
  }
}
</style>
