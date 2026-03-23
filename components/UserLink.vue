<template>
  <div class="card h-100 w-100 shadow-sm">
    <img :src="user.image" alt="avatar" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
      <p class="card-text text-muted">Возраст: {{ user.age }} | {{ user.gender }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <NuxtLink
          class="btn btn-primary"
          :to="`/users/${user.id}`"
      >
        Перейти в профиль
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type {User} from "~/models/users";

  const {user} = defineProps<{
    user: User
  }>();
</script>

<style scoped>

</style>