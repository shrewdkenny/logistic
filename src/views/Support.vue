<template>
  <div class="flex h-dvh w-full">
    <div class="hidden h-full lg:flex lg:w-[18%]">
      <BusinessDashBoardAside />
    </div>
    <div class="fixed z-50 flex cursor-pointer lg:hidden h-full">
      <AsideSmallScreen />
    </div>

    <div
      @click="handleCloseAside"
      v-if="asideStore.isAsideVisible"
      class="fixed inset-0 z-10 h-full cursor-pointer bg-black bg-opacity-35"
    ></div>

    <div class="flex w-full flex-col">
      <div>
        <BusinessDashBoardHeader Heading="Support" />
      </div>

      <div class="flex h-full flex-col bg-[#edeef7] p-4 lg:items-center">
        <div
          class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="user-headset"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-4"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M416 192v16a112.15 112.15 0 0 1-112 112h-96a32 32 0 0 1 0-64h32a32 32 0 0 1 32 32h32a80.09 80.09 0 0 0 80-80v-16c0-88.22-71.78-160-160-160S64 103.78 64 192v16a16 16 0 0 1-32 0v-16C32 86.13 118.13 0 224 0s192 86.13 192 192z"
                class="text-[#c5c2c2]"
              ></path>
              <path
                fill="currentColor"
                d="M320 352h-23.1a174.1 174.1 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zm-175.65-60.53c-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47z"
                class="text-[#8e8c8c]"
              ></path>
            </g>
          </svg>
          <h1>support</h1>
        </div>
        <div
          class="mt-2 flex w-full flex-col rounded-xl bg-[#ffffff] p-6 lg:w-[50%]"
        >
          <h1 class="font-medium">Have Issues? Send Us a Message!</h1>
          <div class="mt-5 flex flex-col gap-4">
            <div>
              <label for="your email" class="text-sm">Your Email</label>
              <Input
                class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
              />
            </div>
            <div>
              <label for="subject" class="text-sm">subject</label>
              <Input
                class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
              />
            </div>
            <div>
              <p>Message</p>
              <Textarea />
            </div>
            <Button
              variant="outline"
              class="bg-[#66cc66] px-20 py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
              >Send Message</Button
            >

            <h1 class="mt-5 font-normal tracking-wider">Contact Details</h1>
            <p class="text-md text-[#40bd57]">+234 814 337 1347</p>
            <div class="flex gap-3">
              <img src="@/assets/images/instagram.svg" alt="" class="w-5" />
              <p class="text-[#40bd57]">@greensexlogistic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import AsideSmallScreen from "@/components/AsideSmallScreen.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import Input from "@/components/ui/input/Input.vue";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/stores/store";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    AsideSmallScreen,
    BusinessDashBoardHeader,
    Input,
    Button,
    Textarea,
  },

  setup() {
    const asideStore = useStore();
    const handleCloseAside = () => {
      asideStore.closeAside();
    };

    return {
      asideStore,
      handleCloseAside,
    };
  },
};
</script>
