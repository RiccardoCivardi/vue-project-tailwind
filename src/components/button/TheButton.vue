<template>
  <button class="c-button" :disabled="disabled">
    <span class="c-button__content">{{ content }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {},
});
</script>

<style lang="scss" scoped>
@import "./index.css";

// .button {
//   @apply rounded-lg bg-primary-400 px-[16px] py-[12px] text-white;
//   @apply hover:bg-primary-300;
//   @apply focus:bg-primary-600;
//   @apply disabled:bg-neutral-200;
//   &__content {
//     @apply text-[1rem] font-medium;
//   }
// }
</style>
