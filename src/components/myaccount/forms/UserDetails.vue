<script setup>
import useSupabase from "../../../composables/useSupabase";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const { supabase } = useSupabase();
const router = useRouter();
const route = useRoute();
const currentId = route.params.linkId;

const name = ref("");
const email = ref("");
const phone = ref("");
const country = ref("");
const city = ref("");
onMounted(() => {
  getUserDetails();
});

const getUserDetails = async () => {
  let { data } = await supabase.from("user_details").select("*");

  name.value = data[0].name;
  email.value = data[0].email;
  phone.value = data[0].phone;
  country.value = data[0].country;
  city.value = data[0].city;
  console.log(data);
};

const addUserDetails = async () => {
  try {
    const { data, error } = await supabase.from("user_details").update([
      {
        name: name.value,
        email: email.value,
        phone: phone.value,
        country: country.value,
        city: city.value,
      },
    ]);
    if (error) throw error;
    router.push({ name: "Links" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="addUserDetails">
      <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
        <label class="font-bold">User Details</label>
        <div class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5">
          <div class="space-y-1">
            <label>Name</label
            ><input
              type="text"
              v-model="name"
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
            <label>Email</label
            ><input
              type="email"
              v-model="email"
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
            <label>Phone</label
            ><input
              type="tel"
              v-model="phone"
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
      <div class="font-bold mt-[25px]"><h1>Location</h1></div>
      <div class="flex flex-row space-x-7 pt-4.5">
        <div class="space-y-1 flex flex-col w-full">
          <label>Country</label
          ><input
            type="text"
            v-model="country"
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
        <div class="space-y-1 flex flex-col w-full">
          <label>City</label
          ><input
            type="text"
            v-model="city"
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
      <div class="flex flex-col pt-12.5 space-y-1">
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
  </div>
</template>

<style scoped></style>
