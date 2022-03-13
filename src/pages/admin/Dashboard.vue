<script setup>
import useAuthUser from "../../composables/useAuthUser";
import TheSidebar from "../../components/TheSidebar.vue";
import TheNavbar from "../../components/TheNavbar.vue";

const { user } = useAuthUser();
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1">
      <TheSidebar />
      <div class="py-12 px-20 w-3/5 flex flex-col items-center">
        <h1 class="font-bold text-4xl">Dashboard</h1>
        <h1 class="pt-6">Page Title Heading</h1>
        <nav>Tabbed Navigation Section</nav>
        <div>Control Bar</div>
        <div>Form or Link Container</div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
