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
        <h1 class="font-bold text-4xl">Appearance</h1>
        <h1 class="pt-6">Page Title Heading</h1>
        <nav>Tabbed Navigation Section</nav>
        <div>Control Bar</div>
      </div>
      <div class="py-10 px-20 w-2/5 bg-[#fafafa] flex flex-col items-center">
        <h1 class="font-bold text-4xl">Mobile Preview</h1>
        <h1>Mobile/Desktop State Switch</h1>
        <h1>Preview Frame</h1>
        <h1>Users Social Page Button</h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
