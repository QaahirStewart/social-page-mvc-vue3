<script setup>
import useSupabase from "../composables/useSupabase";
import { onMounted } from "vue";
import { ref } from "vue";

const { supabase } = useSupabase();

const links = ref("");

onMounted(() => {
  getLinks();
});

const getLinks = async () => {
  let { data } = await supabase.from("links").select("*");

  links.value = data;
};
</script>

<template>
  <div class="max-h-md overflow-auto overscroll-auto space-y-4.5">
    <div v-for="link in links" :key="link.id">
      <router-link :to="{ name: 'EditLink', params: { linkId: link.id } }">
        <div
          class="
            bg-concrete-500
            hover:bg-concrete-500 hover:border-1
            border-concrete-600
            w-2xl
            h-[75px]
            px-6
            rounded-lg
            focus:outline-concrete-600 focus:outline-1 focus:ring-0
            autofill:bg-pink-300
            pl-20
            flex
            items-center
            font-bold
          "
        >
          {{ link.title }}
        </div></router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
