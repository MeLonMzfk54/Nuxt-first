<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100 wh-100">
    <div class="mb-4">
      <i class="bi bi-exclamation-triangle display-1 text-danger"></i>
    </div>
    <h1 class="display-4 text-danger mb-3">404 - Страница не найдена</h1>
    <p class="lead text-muted mb-4">
      Упс! Данная страница не существует или была перенесена
    </p>
    <NuxtLink class="btn btn-primary" to="/">На главную</NuxtLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>