<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-success px-4" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">Abhiassa</a>
      <div>
        <!-- <button class="btn btn-danger" style="margin-right: 20px">Logout</button> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" exact-active-class="active" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              to="/register"
              >Register</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" exact-active-class="active" to="/login"
              >Login</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              to="/teacher"
              >Teacher</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              aria-current="page"
              exact-active-class="active"
              to="/student"
              >Student</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" exact-active-class="active" to="/about"
              >About</RouterLink
            >
          </li>
        </ul>
        <div>
          <button class="btn btn-danger" style="margin-right: 20px">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>
