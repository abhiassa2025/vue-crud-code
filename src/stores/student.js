import { defineStore } from 'pinia'
import axios from 'axios'

export const useStudentStore = defineStore('student', {
  state: () => ({
    students: [],
    student: {
        name: '',
        class: '',
        address: '',
    },
    loading: false,
    error: null,
  }),
  actions: {
    async fetchStudents() {
      this.loading = true
      try {
        const res = await axios.get('http://127.0.0.1:8090/api/collections/student/records')
        this.students = res.data.items
        console.log(this.students)
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
          'http://127.0.0.1:8090/api/collections/student/records',
          newData,
        )
        this.students.push(res.data)
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    async updateStudent(updates) {
      const id = this.student?.id
      this.loading = true
      try {
        const res = await axios.patch(
          `http://127.0.0.1:8090/api/collections/student/records/${id}`,
          updates,
        )
        const idx = this.students.findIndex((s) => s.id === id)
        if (idx !== -1) this.students[idx] = res.data
        this.student = {}
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
    async deleteStudent(id) {
      this.loading = true
      try {
        await axios.delete(`http://127.0.0.1:8090/api/collections/student/records/${id}`)
        this.students = this.students.filter((s) => s.id !== id)
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },
  },
})
