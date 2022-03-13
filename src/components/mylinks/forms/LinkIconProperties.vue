<template>
  <div class="space-y-4.5 overflow-auto overscroll-auto h-auto max-h-60">
    <div class="space-y-1">
      <div>
        <label>Custom Icon</label>
      </div>
      <div class="flex flex-row space-x-5">
        <div class="h-40px w-40px bg-[#f2f2f2] rounded-lg"></div>
        <div class="flex items-end">
          <p class="w-full font-bold">Customs icon url.....</p>
        </div>
      </div>
    </div>

    <div class="space-y-1">
      <label>Shape</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Box</option>
        <option value="Large">Squircle</option>
        <option value="Medium">Circle</option>
      </select>
    </div>

    <div class="space-y-1">
      <label>Size</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Small</option>
        <option value="Large">Medium</option>
        <option value="Medium">Large</option>
      </select>
    </div>

    <div class="space-y-5 flex flex-col">
      <div class="space-y-5">
        <label>Border</label>
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
    </div>

    <div class="flex flex-col spacey-1">
      <div>
        <label>Background Color</label>
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
      <label>Quick Icon</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Solid</option>
        <option value="Large">Outline</option>
      </select>
    </div>

    <div class="flex flex-col spacey-1">
      <div>
        <label>Quick Icon Color</label>
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
  </div>
</template>

<script setup></script>

<style scoped></style>
