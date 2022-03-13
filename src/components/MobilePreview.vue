<script setup>
import useSupabase from "../composables/useSupabase";
import { onMounted } from "vue";
import { ref } from "vue";
import SocialProfileButton from "./SocialProfileButton.vue";

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
  <!-- Preview Head Title -->
  <div class="py-10 px-20 w-2/5 bg-[#fafafa] flex flex-col items-center">
    <h1 class="font-bold text-4xl">Preview</h1>
    <!-- Preview Control -->
    <div class="flex space-x-4 mt-6">
      <button>Mobile</button>
      <span>|</span>
      <button class="font-bold text-havelockblue-500">Desktop</button>
    </div>

    <div class="space-y-2 w-md mt-12">
      <div v-for="link in links" :key="link.id">
        <a :href="link.url" target="_blank">
          <div
            class="p-4 m-1 flex items-center"
            :style="{
              color: link.border_hex,
              // height: link.button_size,
              backgroundColor: link.button_color,
              borderWidth: link.border_width + 'px',
              borderColor: link.border_color,
              borderRadius: link.button_corner,
            }"
          >
            <p
              class="flex-grow flex justify-center font-bold"
              :style="{ color: link.title_hex }"
            >
              {{ link.title }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <SocialProfileButton />
  </div>
</template>
