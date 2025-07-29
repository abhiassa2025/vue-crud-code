<template>
  <main class="p-4">
    <h1 style="text-align: center">Register</h1>
    <div class="d-flex justify-content-center align-items-center">
      <div style="width: 30vw;">
        <div class="mb-3 mt-4">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Masukan email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="********"
            required
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Konfirmasi Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="********"
            required
          />
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-success w-100">Register</button>
        </div>
      </div>
    </div>
  </main>
</template>
