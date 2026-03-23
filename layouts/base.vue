<template>
  <div>
    <AppHeader />

    <div class="container py-5">
      <slot />
    </div>

    <slot name="footer" />
  </div>
</template>

<script setup></script>