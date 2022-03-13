<template>
  <div class="flex justify-center items-center">
    <button
      type="button"
      @click="openModal"
      class="
        w-xs
        h-[50px]
        rounded-xl
        text-white
        font-bold
        bg-selectiveyellow-500
        hover:bg-selectiveyellow-600
      "
    >
      Link Properties
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
                max-w-sm
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
                  Link Properties
                </DialogTitle>
                <h2 class="mt-2 text-center">
                  Customize the appearance of your link.
                </h2>
                <div class="mt-8"><LinkPropertiesNav /></div>

                <div class="mt-10 space-y-2">
                  <button
                    class="
                      justify-center
                      w-full
                      h-[50px]
                      px-4
                      font-bold
                      text-white
                      bg-woodsmoke-500
                      rounded-xl
                      hover:opacity-
                      focus:outline-none
                    "
                    @click="closeModal"
                  >
                    Save
                  </button>
                  <button
                    class="
                      flex
                      justify-center
                      w-full
                      h-[50px]
                      px-4
                      font-bold
                      text-black
                      rounded-md
                      hover:text-havelockblue-500
                      focus:outline-none
                    "
                    @click="closeModal"
                  >
                    Clear
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
import LinkPropertiesNav from "./LinkPropertiesNav.vue";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    LinkPropertiesNav,
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
