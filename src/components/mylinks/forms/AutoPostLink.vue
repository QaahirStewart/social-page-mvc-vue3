<template>
  <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
    <label class="font-bold">Link Details</label>
    <div class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5">
      <div class="flex flex-col flex-1 space-y-1">
        <label>Automate your Link</label>
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
          Connect
        </button>
      </div>

      <div class="space-y-1">
        <p>
          Connect to Instagram to enable automatic generated links from your
          posts. <strong>Learn More.</strong>
        </p>
      </div>

      <div class="space-y-1">
        <label>Enable Auto-Post</label>
        <div class="flex space-x-5">
          <div
            class="
              h-[50px]
              w-[50px]
              bg-[#F2F2F2]
              rounded-lg
              flex
              justify-center
            "
          >
            <div class="h-5 w-5 bg-black self-center rounded-full"></div>
          </div>
          <p class="self-center font-bold">Inactive</p>
        </div>
      </div>

      <div class="space-y-1">
        <label>Default Auto-Post Layout</label
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
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
    </div>
    <p>
      Once posted, users can customize the look of link from Link Properties
    </p>
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
