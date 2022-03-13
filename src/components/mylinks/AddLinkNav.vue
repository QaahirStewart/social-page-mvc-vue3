<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import DefaultLink from "./forms/DefaultLink.vue";
import EventLink from "./forms/EventLink.vue";
import MediaLink from "./forms/MediaLink.vue";
import AutoPostLink from "./forms/AutoPostLink.vue";
import QuickLconLink from "./forms/QuickLconLink.vue";
</script>

<template>
  <TabGroup>
    <TabList class="flex mt-12.5 space-x-8.75 text-xs">
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-3 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-link h-6 w-6"></div>
            <p>Default</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-mdi-calendar-star h-7 w-7"></div>
            <p>Events</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-photo-video h-7 w-7"></div>
            <p>Media</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-magic h-7 w-7"></div>
            <p>Auto-Post</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-mdi-lightning-bolt-circle h-7 w-7"></div>
            <p>Quick Icon</p>
          </div>
        </button>
      </Tab>
    </TabList>
    <TabPanels class="mt-7">
      <TabPanel><DefaultLink /></TabPanel>
      <TabPanel><EventLink /></TabPanel>
      <TabPanel><MediaLink /></TabPanel>
      <TabPanel><AutoPostLink /></TabPanel>
      <TabPanel><QuickLconLink /></TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<style></style>
