<script setup>
import useAuthUser from "../../../composables/useAuthUser";
import TheNavbar from "../../../components/TheNavbar.vue";
import TheSidebar from "../../../components/TheSidebar.vue";
import MyAccountNav from "../../../components/myaccount/nav/MyAccountNav.vue";
import UserDetails from "../../../components/myaccount/forms/UserDetails.vue";
import GoBack from "../../../components/GoBack.vue";

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
            <h1 class="font-bold text-4xl">Account Settings</h1>
          </div>
        </div>
        <h1 class="pt-6">Manage your personal user details on this page.</h1>
        <div class="flex flex-col items-center"></div>
        <MyAccountNav />
        <UserDetails />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
