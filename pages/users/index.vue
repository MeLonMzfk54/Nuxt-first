<template>
  <div>
    <h1>Users</h1>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <ul v-else class="d-flex flex-wrap justify-content-between list-unstyled gap-3">
      <li v-for="user in users" :key="user.id">
<!--        <NuxtLink-->
<!--            class="list-group-item"-->
<!--            :to="`/users/${user.id}`"-->
<!--        >-->
<!--          {{ user.firstName }} {{ user.lastName }}-->
<!--        </NuxtLink>-->
        <UserLink :user="user"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {userService} from "@/services/user.service";

definePageMeta({
    layout: "users-layout",
  })

  // const users = ref<User[]>([
  //   {id: 1, name: "Alex"},
  //   {id: 2, name: "Bob"},
  //   {id: 3, name: "Anton"},
  // ])

  const { data, pending, error } = useAsyncData('users', userService.getAll);
  const users = computed(() => data.value?.users ?? [])
</script>

<style scoped>
h1 {
  color: blue;
}
</style>