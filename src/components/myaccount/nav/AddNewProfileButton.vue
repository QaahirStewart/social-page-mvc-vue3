<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const openprofilecreation = () => {
  router.push({ name: "ProfileCreation" });
};
</script>

<template>
  <div>
    <button
      class="
        w-2xl
        h-[50px]
        rounded-lg
        text-white
        font-bold
        bg-neutral-800
        hover:bg-neutral-900
        mt-10
      "
      @click="openprofilecreation"
    >
      Add New Profile
    </button>
  </div>
</template>

<style scoped></style>
