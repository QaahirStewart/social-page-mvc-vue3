<script setup>
import TheSidebar from "../../components/TheSidebar.vue";
import AddLinkNav from "../../components/mylinks/AddLinkNav.vue";
import TheNavbar from "../../components/TheNavbar.vue";
import GoBack from "../../components/GoBack.vue";
import MobilePreview from "../../components/MobilePreview.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1">
      <TheSidebar />
      <div class="py-10 px-20 w-3/5 flex flex-col items-center">
        <div class="flex w-2xl">
          <GoBack />
          <div class="flex justify-center w-xl">
            <h1 class="font-bold text-4xl">New Link</h1>
          </div>
        </div>

        <h1 class="mt-6">
          Fill out the form below to quickly create a new link.
        </h1>
        <AddLinkNav />
      </div>
      <MobilePreview />
    </div>
  </div>
</template>

<style scoped></style>
