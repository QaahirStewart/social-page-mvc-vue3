<template>
  <div class="flex justify-center items-center">
    <button
      type="button"
      @click="openModal"
      class="
        w-2xl
        h-[50px]
        rounded-lg
        text-white
        font-bold
        bg-neutral-800
        hover:bg-neutral-900
        mt-10
      "
    >
      Add Linked Connection
    </button>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black opacity-25" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                max-w-md
                transition-all
                transform
                bg-white
                border-black border-3
                rounded-lg
              "
            >
              <div class="w-full">
                <div class="flex justify-end">
                  <button
                    class="
                      h-7
                      w-7
                      mt-4
                      mr-4
                      hover:bg-concrete-500
                      rounded-lg
                      flex
                      justify-center
                    "
                  >
                    <div class="i-fa-solid-times self-center"></div>
                  </button>
                </div>
              </div>
              <div class="px-12">
                <DialogTitle class="font-bold text-xl flex justify-center">
                  Linked Connection
                </DialogTitle>
                <h2 class="mt-2 text-center">
                  Link to social provider for access permission and information
                  sharing.
                </h2>
                <div
                  class="
                    flex flex-col
                    items-center
                    space-y-3
                    hover:text-[#1DA1F2]
                    mt-12
                  "
                >
                  <div class="i-fa-solid-handshake h-7 w-7"></div>
                  <p class="text-xs">Linked Connections</p>
                </div>
                <div class="space-y-4.5 mt-12">
                  <div class="space-y-1">
                    <label>Social Provider</label
                    ><input
                      type="text"
                      v-model="title"
                      class="
                        bg-concrete-500
                        hover:bg-concrete-500 hover:border-1
                        border-concrete-600
                        w-full
                        h-[50px]
                        px-6
                        rounded-lg
                        focus:outline-concrete-600 focus:outline-1 focus:ring-0
                      "
                    />
                  </div>

                  <div class="space-y-1">
                    <label>Profile Permission</label>
                    <div class="flex space-x-5">
                      <div
                        class="
                          h-[50px]
                          w-[50px]
                          bg-[#F2F2F2]
                          rounded-lg
                          flex
                          justify-center
                        "
                      >
                        <div
                          class="h-5 w-5 bg-black self-center rounded-full"
                        ></div>
                      </div>
                      <p class="self-center">Access to Users Profile</p>
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label>Media Permission</label>
                    <div class="flex space-x-5">
                      <div
                        class="
                          h-[50px]
                          w-[50px]
                          bg-[#F2F2F2]
                          rounded-lg
                          flex
                          justify-center
                        "
                      >
                        <div
                          class="h-5 w-5 bg-black self-center rounded-full"
                        ></div>
                      </div>
                      <p class="self-center">Access to User Media</p>
                    </div>
                  </div>
                </div>

                <div class="mt-6 mb-4">
                  <button
                    class="
                      w-full
                      h-[50px]
                      rounded-lg
                      text-white
                      font-bold
                      bg-neutral-800
                      hover:bg-neutral-900
                    "
                    @click="closeModal"
                  >
                    Connect
                  </button>
                  <button
                    class="
                      inline-flex
                      justify-center
                      w-full
                      h-[50px]
                      px-4
                      py-2
                      font-bold
                      text-black
                      rounded-md
                      hover:text-havelockblue-500
                      focus:outline-none
                    "
                    @click="closeModal"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
};
</script>
