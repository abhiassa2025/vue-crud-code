<script setup></script>

<template>
  <h1 class="mt-4">Tambah Siswa</h1>
  <main class="p-4">
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Masukan nama"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Kelas</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Masukan kelas"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Alamat</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Masukan alamat"
        ></textarea>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-primary">Simpan</button>
        <RouterLink class="btn btn-danger" aria-current="page" to="/student">Batal</RouterLink>
      </div>
    </form>
  </main>
</template>

<style></style>
