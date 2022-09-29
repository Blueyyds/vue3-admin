import { getInfo, login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
import { defineStore } from 'pinia'

const useUserStore = defineStore('User', {
  state: () => ({
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: '',
  }),
  getters: {},
  actions: {
    login({ username, password }) {
      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password })
          .then(({ data }) => {
            this.token = data.token
            setToken(data.token)
            resolve()
            console.log('login ok!')
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    getInfo() {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(({ data }) => {
            if (!data) {
              reject('Verification failed, please Login again.')
            }

            this.roles = data.roles
            this.name = data.name
            this.description = data.description
            this.avatar = data.avatar
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    logout() {},
  },
})

export default useUserStore
