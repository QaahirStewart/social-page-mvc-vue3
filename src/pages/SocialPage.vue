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
  <div class="h-screen flex">
    <div class="flex bg-black m-8 rounded-3xl mx-auto">
      <div class="flex m-7">
        <div class="w-sm h-full text-red-500">Test</div>
        <div class="bg-white w-5xl rounded-3xl h-full">
          <div class="space-y-4 w-4xl p-10 mx-auto mt-12">
            <h1 class="flex justify-center text-3xl font-bold">My Links</h1>
            <div class="flex justify-around font-bold">
              <h2>Page 1</h2>
              <h2>Page 2</h2>
              <h2>Page 3</h2>
            </div>

            <div v-for="link in links" :key="link.id">
              <a :href="link.url" target="_blank">
                <div
                  class="p-6 m-1 flex items-center"
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
