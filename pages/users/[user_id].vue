<template>
  <div>
    <h1 class="text-danger mb-4">ID Пользователя: {{ userId }}</h1>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <div v-else>
      <div class="card shadow-lg">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="userComputed.image" alt="avatar">
          </div>

          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">{{ userComputed.firstName }} {{ userComputed.lastName }}</h2>
              <p class="card-text text-muted">Возраст: {{ userComputed.age }}</p>

              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Email:</strong> {{ userComputed.email }}</li>
                <li class="list-group-item"><strong>Телефон:</strong> {{ userComputed.phone }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: "users-layout",
})

const route = useRoute()
const userId = Number(route.params.user_id)

const { user, pending, error } = useUser(userId)

const userComputed = computed(() => {
  if (!user.value) throw new Error('User is not loaded!')
  return user.value
})
</script>

<style scoped>
h1 {
  color: blue;
}
</style>