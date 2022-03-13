<script setup>
import TheNavbar from "../../../components/TheNavbar.vue";
import TheSidebar from "../../../components/TheSidebar.vue";
import UserProfileNav from "../../../components/myaccount/nav/UserProfileNav.vue";
import GoBack from "../../../components/GoBack.vue";
import useSupabase from "../../../composables/useSupabase";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const profile = ref();
const route = useRoute();
const { supabase } = useSupabase();

const currentId = route.params.profileId;

const getProfile = async () => {
  let { data } = await supabase
    .from("user_profile")
    .select("*")
    .eq("id", currentId);

  profile.value = data;
  console.log(data);
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <TheNavbar />
    <div class="flex flex-1">
      <TheSidebar />
      <div class="py-12 w-3/5 flex flex-col items-center">
        <div class="grid grid-cols-3 w-2xl">
          <GoBack />

          <h1 class="font-bold text-4xl">Edit Profile</h1>
        </div>
        <h1 class="pt-6">
          Setup your user profile, connections and manage your account settings.
        </h1>
        <div class="flex flex-col items-center"></div>

        <UserProfileNav />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
