<script setup>
import useSupabase from "../../../composables/useSupabase";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { supabase } = useSupabase();
const router = useRouter();

const socialTitle = ref("");
const bio = ref("");

const addProfile = async () => {
  try {
    const { data, error } = await supabase.from("user_profile").insert([
      {
        social_title: socialTitle.value,
        bio: bio.value,
      },
    ]);
    if (error) throw error;
    router.push({ name: "Account" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addProfile">
      <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
        <label class="font-bold">Profile Details</label>
        <div class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5">
          <div class="flex flex-row space-x-7">
            <div class="h-20.5 w-20.5 bg-[#F2F2F2] rounded-lg"></div>
            <div class="flex flex-col flex-1 space-y-1">
              <label>Profile Image</label>
              <button
                class="
                  w-[320px]
                  h-[50px]
                  rounded-lg
                  text-white
                  font-bold
                  bg-[#7F47DD]
                  hover:bg-violet-500
                "
              >
                Upload
              </button>
            </div>
          </div>
          <div class="space-y-1">
            <label>Social Title</label
            ><input
              v-model="socialTitle"
              type="text"
              class="
                bg-[#F2F2F2]
                w-full
                h-[50px]
                px-6
                rounded-lg
                focus:outline-none
              "
            />
          </div>

          <div class="space-y-1">
            <label>Bio</label
            ><textarea
              v-model="bio"
              rows="4"
              maxlength="250"
              class="
                py-3
                bg-[#F2F2F2]
                w-full
                px-6
                rounded-lg
                focus:outline-none
              "
            ></textarea>
          </div>
        </div>
      </div>

      <div class="flex flex-col pt-12 space-y-1">
        <button
          type="submit"
          class="
            max-w-full
            w-2xl
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
  </div>
</template>
