import useUserStore from '@/stores/user';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { getToken } from './auth';

// create an axios instance
const service = axios.create({
  timeout: 5000,
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

//request interceptor
service.interceptors.request.use(
  config => {
    const userStore = useUserStore();
    if (userStore.token) {
      config.headers.token = getToken();
    }
    return config;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (!res.data) {
      res.data = {};
    }
    console.log(res);
    if (res.code !== 20000) {
      const message = res.msg.trim() !== '' ? res.msg.trim() : 'Error Request';
      ElMessage({
        message,
        type: 'error',
        duration: 2000,
      });

      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    console.log(error); // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5000,
    });
    return Promise.reject(error);
  }
);

export default service;
