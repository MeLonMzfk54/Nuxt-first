<template>
  <header class="bg-dark p-3">
    <ul class="nav container">
      <li class="nav-item"><NuxtLink :class="['nav-link ', isActive('/') ? 'text-warning fw-bold' : 'text-white']" to="/">Главная</NuxtLink></li>
      <li class="nav-item"><NuxtLink :class="['nav-link', isActive('/contact') ? 'text-warning fw-bold' : 'text-white']" to="/contact">Контакты</NuxtLink></li>
      <li class="nav-item"><NuxtLink :class="['nav-link', isActive('/users') ? 'text-warning fw-bold' : 'text-white']" to="/users">Пользователи</NuxtLink></li>
    </ul>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

</script>