<template>
  <div class="space-y-4.5 overflow-auto overscroll-auto h-auto max-h-60">
    <div class="flex flex-col spacey-1">
      <div>
        <label>Add a Page</label>
      </div>
      <div class="flex space-x-5">
        <div
          class="
            h-[40px]
            bg-concrete-500
            w-[50px]
            flex
            justify-center
            rounded-lg
            hover:bg-concrete-600
          "
        >
          <div class="flex items-center">
            <div class="i-fa-solid-plus h-4 w-4"></div>
          </div>
        </div>
        <input
          type="text"
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
    </div>

    <div class="space-y-1">
      <label>My Pages</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">My Socials</option>
        <option value="Large">Events</option>
        <option value="Medium">My Music</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
