<template>
  <div
    class="flex items-center justify-between bg-[#ffffff] px-3 py-5 shadow-lg shadow-[#edeef6] lg:hidden"
  >
    <router-link to="/">
      <img src="@/assets/images/greensexlogo.svg" alt="" class="w-1/2"
    /></router-link>

    <div class="w-1/2">
      <svg
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
    </div>
  </div>
  <div
    class="sticky top-0 hidden justify-between bg-[#ffffff] px-10 py-8 shadow-lg shadow-[#edeef6] lg:flex"
  >
    <h1 class="text-3xl font-normal">{{ Heading }}</h1>
    <div class="flex gap-3 border-l-2 border-[#c9cad1] py-1 pl-3">
      <h1 class="text-[#b5b5c3]">
        Hi, <span class="text-[#7e8299]">Azeez Kehinde</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    Heading: String,
  },
};
</script>

<style lang="scss" scoped></style>
