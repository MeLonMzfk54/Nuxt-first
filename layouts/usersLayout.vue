<template>
  <BaseLayout>
    <slot />

    <template #footer>
      <footer class="bg-dark p-3">
        <div class="container">
          <p class="text-white">Vse prava sashisheni :)</p>
        </div>
      </footer>
    </template>
  </BaseLayout>
</template>

<script setup lang="ts">
  import BaseLayout from '~/layouts/base.vue'
</script>