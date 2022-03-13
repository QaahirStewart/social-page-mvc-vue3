<script setup>
import useAuthUser from "../../../composables/useAuthUser";
import TheNavbar from "../../../components/TheNavbar.vue";
import TheSidebar from "../../../components/TheSidebar.vue";
import GoBack from "../../../components/GoBack.vue";
import UserProfileNav from "../../../components/myaccount/nav/UserProfileNav.vue";
import NewProfile from "../../../components/myaccount/forms/NewProfile.vue";

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
            <h1 class="font-bold text-4xl">New Profile</h1>
          </div>
        </div>
        <h2 class="pt-6">Setup your user profile.</h2>
        <div class="flex flex-col items-center"></div>

        <UserProfileNav />
        <NewProfile />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
