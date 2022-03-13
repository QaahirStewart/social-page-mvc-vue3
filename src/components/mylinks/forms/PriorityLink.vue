<template>
  <div class="space-y-4 overflow-auto overscroll-auto h-48">
    <div class="space-y-1">
      <label>Link Effect</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Glow</option>
        <option value="Large">Bounce</option>
        <option value="Medium">Shake</option>
        <option value="Large">Dance</option>
      </select>
    </div>

    <div class="space-y-1">
      <label class="flex justify-start">Start</label
      ><input
        type="datetime-local"
        class="
          bg-[#F2F2F2]
          w-full
          h-[40px]
          px-6
          rounded-lg
          focus:outline-none
          text-sm
        "
      />
    </div>

    <div class="space-y-1">
      <label class="flex justify-start">End</label
      ><input
        type="datetime-local"
        class="
          bg-[#F2F2F2]
          w-full
          h-[40px]
          px-6
          rounded-lg
          focus:outline-none
          text-sm
        "
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
