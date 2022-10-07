<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <el-button :icon="ArrowLeft" color="#008489" @click="back">
          返回
        </el-button>
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        gif来源
        <a href="https://zh.airbnb.com/" target="_blank">airbnb</a>
        页面
        <h2 style="margin: 20px 0; font-weight: bold">你没有权限去该页面</h2>
        <h6 style="margin-bottom: 20px; font-weight: bold">
          如有不满请联系你领导
        </h6>
        <ul class="list-unstyled">
          <li>或者你可以去:</li>
          <li class="link-type">
            <router-link to="/dashboard">回首页</router-link>
          </li>
          <li class="link-type">
            <a href="https://www.taobao.com/">随便看看</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img
          :src="errGif"
          width="313"
          height="428"
          alt="Girl has dropped her ice cream."
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGifUrl from '@/assets/401_images/401.gif'
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue'

export default {
  name: 'Page401',
  setup() {
    const errGif = ref(errGifUrl + '?' + +new Date())
    const ewizardClap = ref(
      'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646'
    )
    function back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' })
      } else {
        this.$router.go(-1)
      }
    }

    return {
      errGif,
      ewizardClap,
      back,
      ArrowLeft,
    }
  },
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;

  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
    margin: 40px 0;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<style>
.errPage-container .el-scrollbar__view {
  height: 100%;
}
</style>
