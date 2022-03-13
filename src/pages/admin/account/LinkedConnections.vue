<script setup>
import useAuthUser from "../../../composables/useAuthUser";
import TheNavbar from "../../../components/TheNavbar.vue";
import TheSidebar from "../../../components/TheSidebar.vue";
import GoBack from "../../../components/GoBack.vue";
import UserProfileNav from "../../../components/myaccount/nav/UserProfileNav.vue";
import AddLinkedConnection from "../../../components/myaccount/forms/AddLinkedConnection.vue";

const { user } = useAuthUser();
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1">
      <TheSidebar />
      <div class="py-12 w-3/5 flex flex-col items-center">
        <div class="flex w-2xl">
          <GoBack />
          <div class="flex justify-center w-xl">
            <h1 class="font-bold text-4xl">Linked Connections</h1>
          </div>
        </div>
        <p class="pt-6 max-w-2xl text-center">
          Link your social account to your profile to be able to get ranked and
          add to your social feed posts. Learn More.
        </p>
        <div class="flex flex-col items-center"></div>

        <UserProfileNav />
        <AddLinkedConnection />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
