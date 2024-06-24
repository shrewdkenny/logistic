<template>
  <div class="mt-5 flex w-[100%] gap-3 flex-col items-center lg:w-[50%] lg:flex-row">
    <Input
      placeholder="Enter Pickup Address"
      class="px-4 placeholder:text-lg placeholder:font-normal placeholder:text-[#a2a0a0]"
    />
    <div class="hidden text-[#666666] lg:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-12"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </div>
    <Input
      placeholder="Enter Drop-off Address"
      class="px-4 placeholder:text-lg placeholder:font-normal placeholder:text-[#a2a0a0]"
    />
  </div>
</template>

<script>
import { Input } from "./ui/input";
export default {
  name: "Test",
  components: {
    Input,
  },
};
</script>

<style lang="scss" scoped></style>
