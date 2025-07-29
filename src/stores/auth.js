import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('pb_user')) || null,
    token: localStorage.getItem('pb_token') || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(email, password) {
      try {
        const res = await axios.post('http://127.0.0.1:8090/api/collections/users/auth-with-password', {
          identity: email,
          password: password,
        })

        this.user = res.data.record
        this.token = res.data.token

        localStorage.setItem('pb_token', this.token)
        localStorage.setItem('pb_user', JSON.stringify(this.user))

        return true
      } catch (error) {
        throw error.response?.data?.message || error.message
      }
    },

    async register(name, email, password) {
      try {
        await api.post('/collections/users/records', {
          username: name,
          email,
          password,
          passwordConfirm: password,
        })
      } catch (error) {
        throw error.response?.data?.message || error.message
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('pb_token')
      localStorage.removeItem('pb_user')
    },
  },
})