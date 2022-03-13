<template>
  <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
    <label class="font-bold">Link Details</label>
    <div class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5">
      <div class="flex flex-row space-x-7">
        <div class="h-20.5 w-20.5 bg-[#F2F2F2] rounded-lg"></div>
        <div class="flex flex-col flex-1 space-y-1">
          <label>Photo / Video</label>
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
        <label>Title</label
        ><input
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
        <label>Url</label
        ><input
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
        <label>Subtitle</label
        ><input
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
import LinkFeatureModel from "../LinkFeatureModel.vue";
import LinkPropertiesModel from "../LinkPropertiesModel.vue";
</script>

<style scoped></style>
