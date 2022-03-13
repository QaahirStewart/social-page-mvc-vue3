<script setup>
import useAuthUser from "../../../composables/useAuthUser";
import TheNavbar from "../../../components/TheNavbar.vue";
import TheSidebar from "../../../components/TheSidebar.vue";
import AddNewProfileButton from "../../../components/myaccount/nav/AddNewProfileButton.vue";
import MyAccountNav from "../../../components/myaccount/nav/MyAccountNav.vue";
import ProfileList from "../../../components/myaccount/ProfileList.vue";

const { user } = useAuthUser();
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1">
      <TheSidebar />
      <div class="py-12 w-3/5 flex flex-col items-center">
        <h1 class="font-bold text-4xl">My Account</h1>
        <h1 class="pt-6">
          Setup your user profile, connections and manage your account settings.
        </h1>
        <div class="flex flex-col items-center">
          <MyAccountNav />

          <AddNewProfileButton />
        </div>
        <div class="mt-6"><ProfileList /></div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style scoped></style>
