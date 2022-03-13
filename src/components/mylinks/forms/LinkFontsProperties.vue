<template>
  <div class="space-y-4.5 overflow-auto overscroll-auto h-auto max-h-60">
    <div class="space-y-1">
      <label>Title Font</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Open Sans</option>
        <option value="Large">Poppins</option>
        <option value="Medium">Inter</option>
        <option value="Large">Roboto</option>
        <option value="Medium">Lato</option>
        <option value="Large">Montserrat</option>
      </select>
    </div>

    <div class="flex flex-col spacey-1">
      <div>
        <label>Title Font Color</label>
      </div>
      <div class="flex space-x-5">
        <div
          class="h-[40px] bg-[#F2F2F2] w-[50px] flex justify-center rounded-lg"
        >
          <input type="color" class="w-7 h-8 focus:outline-none self-center" />
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
    </div>

    <div class="space-y-1">
      <label>Subtitle Font</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Open Sans</option>
        <option value="Large">Poppins</option>
        <option value="Medium">Inter</option>
        <option value="Large">Roboto</option>
        <option value="Medium">Lato</option>
        <option value="Large">Montserrat</option>
      </select>
    </div>

    <div class="flex flex-col spacey-1">
      <div>
        <label>Subtitle Font Color</label>
      </div>
      <div class="flex space-x-5">
        <div
          class="h-[40px] bg-[#F2F2F2] w-[50px] flex justify-center rounded-lg"
        >
          <input type="color" class="w-7 h-8 focus:outline-none self-center" />
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
    </div>

    <div class="space-y-1">
      <label>Font Size</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Small</option>
        <option value="Large">Medium</option>
        <option value="Medium">Large</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
