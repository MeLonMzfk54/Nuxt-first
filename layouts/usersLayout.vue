<script setup lang="ts">
</script>
<template>
  <div>
    <header class="bg-dark p-3">
      <ul class="container nav">
        <li class="nav-item"><NuxtLink class="nav-link text-white" to="/">Главная</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link text-white" to="/contact">Контакты</NuxtLink></li>
        <li class="nav-item"><NuxtLink class="nav-link text-white" to="/users">Пользователи</NuxtLink></li>
      </ul>
    </header>
  </div>

  <div class="container py-5">
    <slot></slot>
  </div>

  <footer class="bg-dark p-3">
    <div class="container">
      <p class="text-white">Vse prava sashisheni :)</p>
    </div>
  </footer>
</template>

<style scoped>
header a:not(.router-link-exact-active):hover {
  text-decoration: underline;
}

header a.router-link-exact-active {
  color: #ffb636 !important;
  font-weight: 500;
}
</style>