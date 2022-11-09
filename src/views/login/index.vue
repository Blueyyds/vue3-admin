<template>
  <div class="login-container">
    <div class="login-box">
      <img
        src="https://demo.buildadmin.com/assets/login-header.2b702f97.png"
        class="header"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAD1BMVEXBy9eGlqeTorG9yNSptcPYN5ilAAABVElEQVR42u3Y3Y2DMBAEYBNfAR6gANIBdHDpv6m7h9OtorAWMp6IjeYrgGHX/NibRERERERERETEs+HXlFjwLzHcALOk7gY8KZT7Z9YAQ1mHB17MhAXgLQN2EQpglQBwS/iC45vQIUqP4CK9xGYhdIjQI1SECLihYuEsgSkRAlClgDcEZFStnIfIFAUoQAERAjKq1ut/7BRwgZ9+PSDCxiv+3rS6fY9xAElwRTkE+sfYKAdxd5QQZxjijHMiDaT2mhRtKLg71ow1mPVHy4GG4yIi0kP++/VPa+ov3/Fk7BuyYceUernDMfa7PC9iAKjjFhzAOiKb5XR7SG164LC5w9NTN5Lu38yk/pvScH1iQoaj1wASTQgNam0SGjUUwCkBzQ4XwC0BJ1wiYAC4PdpwwkTqkLlAQMYpK2eNTVGAAhSgAAUoQAEKUIACFKAABShAAZ8c8AO1HXS7nTcqUQAAAABJRU5ErkJggg=="
        class="avatar"
      />
      <el-form :model="form" ref="formRef" :rules="rules" status-icon>
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            @keyup.enter="submitForm"
            ref="usernameRef"
          >
            <template #prefix>
              <SvgIcon name="user" color="#c1cbd7" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            show-password
            @keyup.enter="submitForm"
            ref="passwordRef"
          >
            <template #prefix>
              <SvgIcon name="lock" color="#c1cbd7" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import { ElMessage } from 'element-plus';
import useUserStore from '@/stores/user';
import { useRouter } from 'vue-router';
const router = useRouter();

const form = reactive({
  username: '',
  password: '',
});

const formRef = ref();
const rules = reactive({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const usernameRef = ref();
const passwordRef = ref();

onMounted(() => {
  if (form.username === '') {
    usernameRef.value.focus();
  } else if (form.password === '') {
    passwordRef.value.focus();
  }
});

const submitForm = async () => {
  if (!formRef.value) return;
  await formRef.value.validate(valid => {
    if (valid) {
      const userStore = useUserStore();
      console.log(form);
      userStore.login(form).then(() => {
        router.push({ path: '/' });
        console.log('login ok!');
      });
      console.log('submit ok!');
    } else {
      console.log('error submit!');
      ElMessage({
        message: '表单校验不通过',
        type: 'error',
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.login-container {
  padding-top: 150px;
  width: 100vw;
  height: 100vh;
  background: url('https://demo.buildadmin.com/assets/bg.95f82371.jpg');
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .login-box {
    // margin-top: 120px;
    min-height: 300px;
    width: 430px;
    background-color: #fff;

    .header {
      width: 100%;
      height: 150px;
    }
    .avatar {
      position: absolute;
      left: 50%;
      top: 150px;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 100px;
      border: 4px solid #fff;
      border-radius: 50%;
    }
  }
}
</style>

<style lang="scss">
.login-box {
  .el-form {
    padding: 40px;
    padding-top: 100px;

    .el-form-item {
      height: 40px;

      .el-input {
        height: 100%;
      }
    }

    .el-button {
      width: 100%;
      height: 100% !important;
      margin-top: 16px;
    }
  }
}
</style>
