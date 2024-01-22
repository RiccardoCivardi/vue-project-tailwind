<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead class="bg-primary-50">
      <slot name="header" />
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <slot name="body" />
    </tbody>
  </table>
</template>

<script setup lang="ts"></script>

<style scoped></style>
