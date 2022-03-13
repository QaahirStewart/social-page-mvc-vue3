<script setup>
import useAuthUser from "../../composables/useAuthUser";

const { user } = useAuthUser();
</script>

<template>
  <router-view> </router-view>
</template>

<!-- v-if="!user" -->
