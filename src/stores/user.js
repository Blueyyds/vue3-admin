import { getInfo, login } from '@/api/user';
import { getToken, removeToken, setToken } from '@/utils/auth';
import { defineStore } from 'pinia';

const useUserStore = defineStore('User', {
  state: () => ({
    token: getToken(),
    id: 0,
    username: '',
    realName: '',
    avatar: '',
    role: '',
    address: '',
    phone: '',
    age: '',
  }),
  getters: {},
  actions: {
    async login({ username, password }) {
      console.log('request login');
      console.log(username, password);
      const res = await login({ username, password });
      if (res.code === 20000) {
        this.token = res.data.token || getToken() || '';
        setToken(this.token);
      } else {
        throw new Error('login failed');
      }
    },

    async getInfo() {
      const res = await getInfo();
      console.log(res);
      if (res.code !== 20000) {
        throw new Error('Verification failed, please Login again.');
      } else {
        this.roles = res.data.roles;
        this.name = res.data.name;
        this.description = res.data.description;
        this.avatar = res.data.avatar;
        return res.data;
      }
    },

    logout() {},

    resetToken() {
      this.token = '';
      this.roles = [];
      removeToken();
    },

    commitState(User) {
      if (typeof User === 'object') {
        for (let key in this) {
          if (User[key] != null) {
            this[key] = User[key];
          }
        }
      } else {
        return;
      }
    },
  },
});

export default useUserStore;
