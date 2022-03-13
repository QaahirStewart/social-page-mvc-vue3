<script setup></script>

<template>
  <nav class="flex flex-row text-xs mt-12.5 space-x-8.75 mb-7 tab-nav">
    <div>
      <router-link :to="{ name: 'AccountSettings' }">
        <div class="flex flex-col items-center space-y-3 hover:text-[#1DA1F2]">
          <div class="i-fa-solid-cogs h-7 w-7"></div>
          <p>Account Settings</p>
        </div>
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'ChangePassword' }"
        ><div class="flex flex-col items-center space-y-3 hover:text-[#1DA1F2]">
          <div class="i-fa-solid-key h-7 w-7"></div>
          <p>Change Password</p>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped></style>
