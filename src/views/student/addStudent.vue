<script setup>
import { useStudentStore } from '@/stores/student'

import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStudentStore()

const saveData = () => {
  if (store.student) {
    store.updateStudent(store.student)
    store.student = {}
  } else {
    store.addStudent(store.student)
  }
}
</script>

<template>
  <h1 class="mt-4" v-if="store.student?.id">Edit Siswa</h1>
  <h1 class="mt-4" v-else>Tambah Siswa</h1>
  <main class="p-4">
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nama</label>
        <input
          v-model="store.student.name"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Masukan nama"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Kelas</label>
        <input
          v-model="store.student.class"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Masukan kelas"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
        <input
          v-model="store.student.address"
          type="text"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Masukan alamat"
        />
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-primary" @click="saveData">Simpan</button>
        <RouterLink class="btn btn-danger" aria-current="page" to="/student">Batal</RouterLink>
      </div>
    </div>
  </main>
</template>

<style></style>
