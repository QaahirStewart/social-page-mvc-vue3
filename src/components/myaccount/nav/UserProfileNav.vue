<script setup></script>

<template>
  <nav id="nav" class="flex flex-row text-xs mt-12.5 space-x-8.75 mb-7 tab-nav">
    <div>
      <router-link :to="{ name: 'ProfileCreation' }">
        <div class="flex flex-col items-center space-y-3 hover:text-[#1DA1F2]">
          <div class="i-fa-solid-user-cog h-7 w-7"></div>
          <p>Profile Information</p>
        </div>
      </router-link>
    </div>

    <div>
      <router-link :to="{ name: 'LinkedConnections' }"
        ><div class="flex flex-col items-center space-y-3 hover:text-[#1DA1F2]">
          <div class="i-fa-solid-handshake h-7 w-7"></div>
          <p>Linked Connections</p>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<style scoped></style>
