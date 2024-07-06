<template>
  <div
    class="flex items-center justify-between bg-[#ffffff] px-3 py-3  lg:hidden lg:py-5"
  >
    <router-link to="/">
      <img src="@/assets/images/greensexlogo.svg" alt="" class="h-16 w-1/2"
    /></router-link>

    <div class="lg:w-1/2" @click="handleToggleAside">
      <svg
        v-if="!asideStore.isAsideVisible"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>

  <div
    class="sticky top-0 hidden justify-between bg-[#ffffff] px-10 py-8 shadow-lg shadow-[#edeef6] lg:flex"
  >
    <h1 class="text-3xl font-normal">
      {{ Heading }}
    </h1>
    <div class="flex gap-3 border-l-2 border-[#c9cad1] py-1 pl-3">
      <h1 class="text-[#b5b5c3]">
        Hi, <span class="text-[#7e8299]">Azeez Kehinde</span>
      </h1>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/stores/store";
export default {
  name: "Test",
  props: {
    Heading: String,
  },

  setup() {
    const asideStore = useStore();
    const handleToggleAside = () => {
      asideStore.toogleAside();
    };

    return {
      asideStore,
      handleToggleAside,
    };
  },
};
</script>
