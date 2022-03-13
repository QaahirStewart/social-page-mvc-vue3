<template>
  <TabGroup>
    <TabList class="flex justify-center space-x-8.75 text-xs">
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-regular-clock h-7 w-7"></div>
            <p>Schedule</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-map-signs h-7 w-7"></div>
            <p>Leap</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-star h-7 w-7"></div>
            <p>Priority</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-mdi-lock-open-outline h-7 w-7"></div>
            <p>Protected</p>
          </div>
        </button>
      </Tab>
    </TabList>
    <TabPanels class="mt-8">
      <TabPanel class="overflow-auto overscroll-auto"
        ><ScheduleLink
      /></TabPanel>
      <TabPanel class="overflow-auto overscroll-auto"><LeapLink /></TabPanel>
      <TabPanel class="overflow-auto overscroll-auto"
        ><PriorityLink
      /></TabPanel>
      <TabPanel class="overflow-auto overscroll-auto"
        ><ProtectedLink
      /></TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import ScheduleLink from "./forms/ScheduleLink.vue";
import LeapLink from "./forms/LeapLink.vue";
import PriorityLink from "./forms/PriorityLink.vue";
import ProtectedLink from "./forms/ProtectedLink.vue";
</script>

<style></style>
