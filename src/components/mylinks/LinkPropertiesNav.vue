<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import LinkButtonProperties from "./forms/LinkButtonProperties.vue";
import LinkFontsProperties from "./forms/LinkFontsProperties.vue";
import LinkIconProperties from "./forms/LinkIconProperties.vue";
import AddToPage from "./forms/AddToPage.vue";
</script>

<template>
  <TabGroup>
    <TabList class="flex justify-center space-x-8.75 text-xs">
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-mdi-gesture-tap-button h-7 w-7"></div>
            <p>Button</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-ic-baseline-font-download h-7 w-7"></div>
            <p>Fonts</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-icons h-7 w-7"></div>
            <p>Icons</p>
          </div>
        </button>
      </Tab>
      <Tab v-slot="{ selected }" as="template">
        <button :class="[selected ? 'text-[#1DA1F2]' : 'text-black']">
          <div
            class="flex flex-col items-center space-y-2 hover:text-[#1DA1F2]"
          >
            <div class="i-fa-solid-file-medical h-7 w-7"></div>
            <p>Add to Page</p>
          </div>
        </button>
      </Tab>
    </TabList>
    <TabPanels class="mt-8">
      <TabPanel class="overflow-auto overscroll-auto"
        ><LinkButtonProperties
      /></TabPanel>
      <TabPanel class="overflow-auto overscroll-auto"
        ><LinkFontsProperties
      /></TabPanel>
      <TabPanel class="overflow-auto overscroll-auto"
        ><LinkIconProperties
      /></TabPanel>
      <TabPanel class="overflow-auto overscroll-auto"><AddToPage /></TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<style></style>
