import { defineStore } from 'pinia'
import axios from 'axios'

export const useTeacherStore = defineStore('teacher', {
  state: () => ({
    teachers: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchTeachers() {
      this.loading = true
      try {
        const res = await axios.get('http://127.0.0.1:8090/api/collections/teacher/records')
        this.teachers = res.data.items;
        console.log(res.data)
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    async addStudent(newData) {
      this.loading = true
      try {
        const res = await axios.post(
          'http://127.0.0.1:8090/api/collections/teacher/records',
          newData,
        )
        this.students.push(res.data)
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    async updateStudent(id, updates) {
      this.loading = true
      try {
        const res = await axios.put(`/api/students/${id}`, updates)
        const idx = this.students.findIndex((s) => s.id === id)
        if (idx !== -1) this.students[idx] = res.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    async deleteStudent(id) {
      this.loading = true
      try {
        await axios.delete(`/api/students/${id}`)
        this.students = this.students.filter((s) => s.id !== id)
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
  },
})
