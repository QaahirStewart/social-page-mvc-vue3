<script setup>
import LinkFeatureModel from "../LinkFeatureModel.vue";
import LinkPropertiesModel from "../LinkPropertiesModel.vue";
import useSupabase from "../../../composables/useSupabase";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const { supabase } = useSupabase();
const router = useRouter();
const route = useRoute();

// const linkData = ref("");

const title = ref("");
const description = ref("");
const url = ref("");

const currentId = route.params.linkId;

onMounted(() => {
  getLink();
});

const getLink = async () => {
  let { data } = await supabase.from("links").select("*").eq("id", currentId);
  title.value = data[0].title;
  description.value = data[0].description;
  url.value = data[0].url;
  console.log(data);
};

const editLink = async () => {
  try {
    // const user = supabase.auth.user();
    const { error } = await supabase
      .from("links")
      .update([
        {
          title: title.value,
          description: description.value,
          url: url.value,
        },
      ])
      .eq("id", currentId);

    if (error) throw error;
    router.push({ name: "Links" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <form @submit.prevent="editLink">
    <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
      <label class="font-bold">Link Details </label>

      <div class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5">
        <div class="space-y-1">
          <label>Title</label
          ><input
            type="text"
            v-model="title"
            class="
              bg-concrete-500
              hover:bg-concrete-500 hover:border-1
              border-concrete-600
              w-full
              h-[50px]
              px-6
              rounded-lg
              focus:outline-concrete-600 focus:outline-1 focus:ring-0
            "
          />
        </div>

        <div class="space-y-1">
          <label>Url</label
          ><input
            type="text"
            v-model="url"
            class="
              bg-concrete-500
              hover:bg-concrete-500 hover:border-1
              border-concrete-600
              w-full
              h-[50px]
              px-6
              rounded-lg
              focus:outline-concrete-600 focus:outline-1 focus:ring-0
            "
          />
        </div>
        <div class="space-y-1">
          <label>Subtitle</label
          ><input
            type="text"
            v-model="description"
            class="
              bg-concrete-500
              hover:bg-concrete-500 hover:border-1
              border-concrete-600
              w-full
              h-[50px]
              px-6
              rounded-lg
              focus:outline-concrete-600 focus:outline-1 focus:ring-0
            "
          />
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-[50px]">
      <LinkFeatureModel />
      <LinkPropertiesModel />
    </div>
    <div class="flex flex-col pt-5 space-y-1">
      <button
        type="submit"
        class="
          w-full
          h-[50px]
          rounded-lg
          text-white
          font-bold
          bg-neutral-800
          hover:bg-neutral-900
        "
      >
        Save
      </button>
      <button
        type="button"
        class="w-full h-[50px] rounded-lg text-black font-bold"
      >
        Clear
      </button>
    </div>
  </form>
</template>

<style scoped></style>
