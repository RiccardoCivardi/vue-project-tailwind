<template>
  <div class="flex flex-col items-center justify-center">
    <span class="loader"></span>
    <span class="text-5xl">SIMULAZIONE CHIAMATA API</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loader {
  width: 48px;
  height: 48px;
  border-width: 5px;
  border-style: solid;
  border-color: #ef4444;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
