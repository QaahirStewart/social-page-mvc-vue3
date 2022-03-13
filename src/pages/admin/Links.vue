<script setup>
import TheSidebar from "../../components/TheSidebar.vue";
import TheNavbar from "../../components/TheNavbar.vue";
import { useRouter } from "vue-router";
import MobilePreview from "../../components/MobilePreview.vue";
import Linklist from "../../components/linklist.vue";

const router = useRouter();

const openaddnewlink = () => {
  router.push({ name: "LinkCreation" });
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1">
      <TheSidebar />
      <div class="py-12 px-20 w-3/5 flex flex-col items-center">
        <h1 class="font-bold text-4xl">My Links</h1>
        <h1 class="mt-6">This page is for all your links.</h1>

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
          @click="openaddnewlink"
        >
          Add New Link
        </button>
        <div class="mt-6"><Linklist /></div>
      </div>
      <MobilePreview />
    </div>
  </div>
</template>

<style scoped></style>
