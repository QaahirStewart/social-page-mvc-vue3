<script setup>
import { ref, onMounted } from "vue";
import useSupabase from "../../../composables/useSupabase";
import { useRoute } from "vue-router";

const box = ref("0px");
const squircleS = ref("8px");
const squircleL = ref("20px");
const circle = ref("9999px");
const corner = ref("");
const buttonColor = ref("");
const borderColor = ref("");
const borderWidth = ref("");
// const unitVaule = ref("px");
// const borderWidth = computed(() => borderWidthInput.value + unitVaule.value);

const { supabase } = useSupabase();
const route = useRoute();

const currentId = route.params.linkId;

onMounted(() => {
  getProperties();
});

const getProperties = async () => {
  let { data } = await supabase.from("links").select("*").eq("id", currentId);
  buttonColor.value = data[0].button_color;
  corner.value = data[0].button_corner;
  borderColor.value = data[0].border_color;
  borderWidth.value = data[0].border_width;
  console.log(data);
};

const saveProperties = async () => {
  try {
    // const user = supabase.auth.user();
    const { error } = await supabase
      .from("links")
      .update([
        {
          button_corner: corner.value,
          button_color: buttonColor.value,
          border_width: borderWidth.value,
          border_color: borderColor.value,
        },
      ])
      .eq("id", currentId);

    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <!-- Button Shape -->
  <div
    class="
      space-y-4.5
      overflow-auto
      overscroll-auto
      h-auto
      pr-4
      max-h-60
      scrollbar
      scrollbar-rounded
      scrollbar-track-color-white
      scrollbar-thumb-color-black
      scrollbar-w-6px
    "
  >
    <!-- <div class="space-y-1">
      <label>Shape</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Rectangle</option>
        <option value="Large">Square</option>
      </select>
    </div> -->

    <!-- Button Corner -->
    <form class="space-y-1" @change="saveProperties">
      <label>Corner</label
      ><select
        v-model="corner"
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option :value="box">Box</option>
        <option :value="squircleS">Squircle - Small</option>
        <option :value="squircleL">Squircle - Large</option>
        <option :value="circle">Circle</option>
      </select>
    </form>

    <!-- Button Size -->
    <div class="space-y-1">
      <label>Size</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Small</option>
        <option value="Large">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>

    <!-- Button Color Input -->
    <form class="space-y-1 space-x-5 flex" @change="saveProperties">
      <div>
        <label>Color</label>
        <div
          class="h-[40px] bg-[#F2F2F2] w-[40px] flex justify-center rounded-lg"
        >
          <input
            v-model="buttonColor"
            type="color"
            class="w-7 h-8 focus:outline-none self-center"
          />
        </div>
      </div>
      <input
        v-model="buttonColor"
        type="text"
        placeholder="HEX:"
        class="
          h-[40px]
          bg-[#F2F2F2]
          w-full
          self-end
          rounded-lg
          px-6
          focus:outline-none
        "
      />
    </form>

    <!-- Button Shadow -->
    <!-- <div class="space-y-5 flex flex-col">
      <div class="space-y-5">
        <label>Shadow</label>
        <input
          type="range"
          max="100"
          min="0"
          class="w-full bg-black appearance-none rounded-full h-1.5"
        />
      </div>
      <div class="flex space-x-5">
        <div class="flex">
          <div
            class="
              h-[40px]
              bg-[#F2F2F2]
              w-[40px]
              flex
              justify-center
              rounded-lg
            "
          >
            <input
              type="color"
              class="w-7 h-8 focus:outline-none self-center"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="HEX:"
          class="
            h-[40px]
            bg-[#F2F2F2]
            w-full
            self-end
            rounded-lg
            px-6
            focus:outline-none
          "
        />
      </div>
    </div> -->

    <!-- Button Border -->
    <form class="space-y-5 flex flex-col" @change="saveProperties">
      <div class="space-y-5">
        <label>Border</label>
        <div class="flex items-center space-x-9">
          <p>{{ borderWidth }}px</p>
          <input
            v-model="borderWidth"
            type="range"
            max="5"
            min="0"
            class="w-full bg-black appearance-none rounded-full h-1.5"
          />
        </div>
      </div>
      <div class="flex space-x-5">
        <div class="flex">
          <div
            class="
              h-[40px]
              bg-[#F2F2F2]
              w-[40px]
              flex
              justify-center
              rounded-lg
            "
          >
            <input
              v-model="borderColor"
              type="color"
              class="w-7 h-8 focus:outline-none self-center"
            />
          </div>
        </div>
        <input
          v-model="borderColor"
          type="text"
          placeholder="HEX:"
          class="
            h-[40px]
            bg-[#F2F2F2]
            w-full
            self-end
            rounded-lg
            px-6
            focus:outline-none
          "
        />
      </div>
    </form>

    <!-- <div class="space-y-5 flex flex-col">
      <div class="space-y-5">
        <label>Fill</label>
        <input
          type="range"
          max="100"
          min="0"
          class="w-full bg-black appearance-none rounded-full h-1.5"
        />
      </div>
    </div> -->
  </div>
</template>

<style scoped></style>
