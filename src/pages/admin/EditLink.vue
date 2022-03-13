<script setup>
import { ref } from "vue";
import useSupabase from "../../composables/useSupabase";
import { useRoute } from "vue-router";
import TheSidebar from "../../components/TheSidebar.vue";

import TheNavbar from "../../components/TheNavbar.vue";
import GoBack from "../../components/GoBack.vue";
import MobilePreview from "../../components/MobilePreview.vue";
import EditLinkNav from "../../components/mylinks/EditLinkNav.vue";

const link = ref();
const route = useRoute();
const { supabase } = useSupabase();

const currentId = route.params.linkId;

const getLink = async () => {
  let { data } = await supabase.from("links").select("*").eq("id", currentId);

  link.value = data;
};
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
            <h1 class="font-bold text-4xl">Edit Link</h1>
          </div>
        </div>

        <h1 class="mt-6">
          Fill out the form below to make changes to your link.
        </h1>
        <EditLinkNav />
      </div>
      <MobilePreview />
    </div>
  </div>
</template>

<style scoped></style>
