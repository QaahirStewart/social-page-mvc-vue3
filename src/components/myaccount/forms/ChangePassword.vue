<script setup>
import ForgetPasswordModel from "../ForgetPasswordModel.vue";
</script>

<template>
  <div>
    <form @submit.prevent="addLink">
      <div class="space-y-4.5 max-h-md overflow-auto overscroll-auto">
        <label class="font-bold">Change Password</label>
        <div
          class="2xl:w-2xl xl:w-xl lg:w-lg md:w-sm space-y-4.5"
          @submit.prevent="addLink"
        >
          <div class="space-y-1">
            <label>Password</label
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
            <label>Password</label
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
            <label>Confirm Password</label
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

      <div class="flex flex-col pt-12 space-y-1">
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
        <ForgetPasswordModel />
      </div>
    </form>
  </div>
</template>

<style scoped></style>
