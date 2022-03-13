<template>
  <div class="space-y-4 overflow-auto overscroll-auto h-48">
    <div class="space-y-1">
      <label>Protection Type</label
      ><select
        class="bg-[#F2F2F2] w-full h-[40px] px-6 rounded-lg focus:outline-none"
      >
        <option value="Medium">Password Restriction</option>
        <option value="Large">Age Consent</option>
        <option value="Medium">Sensitive Content</option>
      </select>
    </div>

    <div class="space-y-1">
      <label class="flex justify-start">Password</label
      ><input
        type="password"
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
      <label class="flex justify-start">Comfirm Password</label
      ><input
        type="password"
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
