<script setup>
import { onMounted } from 'vue'
import IconDocumentation from '../../components/icons/IconDocumentation.vue'

import { useTeacherStore } from '@/stores/teacher'

const store = useTeacherStore()

onMounted(() => {
  store.fetchTeachers()
})
</script>

<template>
  <main class="p-4">
    <div class="d-flex align-items-center gap-2">
      <IconDocumentation />
      <h1>Guru</h1>
    </div>
    <RouterLink class="btn btn-success mt-4" aria-current="page" to="/student/add"
      >Tambah Guru</RouterLink
    >
    <table class="table mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nama</th>
          <th scope="col">Jurusan</th>
          <th scope="col">Alamat</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in store.teachers" key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ data.nama }}</td>
          <td>{{ data.jurusan }}</td>
          <td>{{ data.alamat }}</td>
          <td class="d-flex gap-2">
            <RouterLink class="btn btn-sm btn-warning" aria-current="page" to="/student/add"
              >Edit</RouterLink
            >
            <RouterLink class="btn btn-sm btn-danger" aria-current="page" to="/student/add"
              >Hapus</RouterLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style></style>
