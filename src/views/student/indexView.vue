<script setup>
import { onMounted } from 'vue';
import IconDocumentation from '../../components/icons/IconDocumentation.vue';

import { useStudentStore } from '@/stores/student'

import { useRouter } from 'vue-router';


const store = useStudentStore()

const router = useRouter()

const addStudent = () => {
  store.student = {};
  router.push('/student/add')
}

const editStudent = (student) => {
  store.student = student;
  router.push('/student/add')
}

const deleteStudent = (id) => {
  // store.student = student;
  store.deleteStudent(id)
  // router.push('/student/add')
}

onMounted(() => {
  store.fetchStudents()
})
</script>

<template>
  <main class="p-4">
    <div class="d-flex align-items-center gap-2">
      <IconDocumentation />
      <h1>Siswa</h1>
    </div>
    <button class="btn btn-success mt-4" @click="addStudent"
      >Tambah Siswa</button>
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nama</th>
          <th scope="col">Kelas</th>
          <th scope="col">Alamat</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in store.students" key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ data.name }}</td>
          <td>{{ data.class }}</td>
          <td>{{ data.address }}</td>
          <td class="d-flex gap-2">
            <button class="btn btn-sm btn-warning" @click="editStudent(data)"
              >Edit</button
            >
            <button class="btn btn-sm btn-danger" @click="deleteStudent(data.id)"
              >Hapus</button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style></style>
