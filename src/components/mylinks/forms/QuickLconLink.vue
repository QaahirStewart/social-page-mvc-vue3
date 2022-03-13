<template>
  <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
    <label class="font-bold">Quick Icon Details</label>
    <div class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5">
      <div class="space-y-1">
        <label>Url</label
        ><input
          type="text"
          class="
            bg-[#F2F2F2]
            w-full
            h-[50px]
            px-6
            rounded-lg
            text-smy
            focus:outline-none
          "
        />
      </div>

      <div class="space-y-1">
        <label>Style</label
        ><select
          class="
            bg-[#F2F2F2]
            w-full
            h-[50px]
            px-6
            rounded-lg
            focus:outline-none
          "
        >
          <option value="Medium">Outline</option>
          <option value="Large">Solid</option>
        </select>
      </div>
      <div class="space-y-1 space-x-5 flex">
        <div>
          <label>Color</label>
          <div
            class="
              h-[50px]
              bg-[#F2F2F2]
              w-[50px]
              flex
              justify-center
              rounded-lg
            "
          >
            <input
              type="color"
              class="w-8 h-9 focus:outline-none self-center"
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="HEX:"
          class="
            h-[50px]
            bg-[#F2F2F2]
            w-full
            self-end
            rounded-lg
            px-6
            focus:outline-none
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
    <button class="w-full h-[50px] rounded-lg text-black font-bold">
      Clear
    </button>
  </div>
</template>

<script setup>
import LinkPropertiesModel from "../LinkPropertiesModel.vue";
import LinkFeatureModel from "../LinkFeatureModel.vue";
</script>

<style scoped></style>
