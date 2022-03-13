<template>
  <div class="h-full">
    <div class="bg-[#1a1a1a] h-full w-sm pt-20 space-y-30">
      <div class="flex flex-col items-center space-y-10">
        <div
          class="
            h-30
            w-30
            bg-blue-100
            rounded-full
            flex
            justify-center
            items-center
            text-4xl
            font-bold
          "
        >
          MT
        </div>
        <h1 class="text-3xl font-bold text-gray-50 rounded-2xl py-5">
          MARK TELEAHAM
        </h1>
      </div>

      <nav
        id="nav"
        class="
          flex flex-col
          justify-center
          text-xl text-gray-50
          font-bold
          space-y-8
        "
      >
        <router-link
          :to="{ name: 'Account' }"
          class="px-5 ml-26 hover:border-l-2 hover:border-purpleheart-500"
        >
          Account
        </router-link>

        <router-link
          :to="{ name: 'Dashboard' }"
          class="px-5 ml-26 hover:border-l-2 hover:border-purpleheart-500"
          >Dashbaord
        </router-link>

        <router-link
          :to="{ name: 'Links' }"
          class="px-5 ml-26 hover:border-l-2 hover:border-purpleheart-500"
          >My Links
        </router-link>

        <router-link
          :to="{ name: 'Pages' }"
          class="px-5 ml-26 hover:border-l-2 hover:border-purpleheart-500"
          >My Pages
        </router-link>

        <router-link
          :to="{ name: 'Appearance' }"
          class="px-5 ml-26 hover:border-l-2 hover:border-purpleheart-500"
          >Appearance
        </router-link>

        <router-link
          :to="{ name: 'Analytics' }"
          class="px-5 ml-26 hover:border-l-2 hover:border-purpleheart-500"
          >Analytics
        </router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
