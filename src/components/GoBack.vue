<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <button
    class="
      h-10
      w-10
      bg-concrete-500
      hover:bg-concrete-600
      rounded-lg
      flex
      justify-center
      self-start
    "
    @click="goBack"
  >
    <div class="i-fa-solid-arrow-left h-6 w-6 self-center"></div>
  </button>
</template>

<style scoped></style>
