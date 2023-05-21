<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-5">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="item in menuList" :key="item.id">
          <RouterLink
            class="nav-link"
            :class="item.isActive ? 'text-success' : ''"
            :to="item.route"
            >{{ item.name }}</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuList = ref([
  {
    id: 0,
    name: 'Home',
    route: '/',
    isActive: true
  },
  {
    id: 1,
    name: 'Products',
    route: '/products',
    isActive: false
  },
  {
    id: 2,
    name: 'Product',
    route: '/product/1'
  },
  {
    id: 3,
    name: 'Admin',
    route: '/admin',
    isActive: false
  },
  {
    id: 4,
    name: 'VeeValidate',
    route: '/validate',
    isActive: false
  }
])
</script>

<style scoped>
.router-link-active {
  font-weight: 700;
}
</style>
