<template>
  <div>
    <h1>Contacts</h1>

    <form @submit.prevent="submitForm">
      <input type="text" id="name" v-model="name" class="form-control" placeholder="Введите имя"> <br>
      <input type="text" id="email" v-model="email" class="form-control" placeholder="Введите почту"> <br>
      <textarea name="message" id="message" v-model="message" class="form-control" placeholder="Введите сообщение"></textarea> <br>
      <button type="submit" class="btn btn-primary" :disabled="isSub">
        {{ isSub ? 'Отправляем....' : 'Отправить' }}
      </button>
    </form>

    <p
        v-if="resultMessage"
        class="mt-3 alert"
        :class="resultType === 'error' ? 'alert-danger' : 'alert-success'"
    >
      {{ resultMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type {ContactsResponse} from "~/models/examples";

  const name = ref('');
  const email = ref('');
  const message = ref('');
  const isSub = ref(false);
  const resultMessage = ref('')
  const resultType = ref<'success' | 'error' | null>(null)

  const submitForm = async () => {
    isSub.value = true;
    resultMessage.value = '';

    const { data, error } = await useFetch<ContactsResponse>('/api/contacts', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value,
      }
    })

    if (error.value) {
      resultMessage.value = error.value.message
      resultType.value = 'error'
    } else if (data.value) {
      resultMessage.value = data.value.message
      resultType.value = data.value.success ? 'success' : 'error'

      if (data.value.success) {
        name.value = ''
        email.value = ''
        message.value = ''
      }
    }
    isSub.value = false;
  }
</script>

<style scoped>
h1 {
  color: blue;
}
</style>