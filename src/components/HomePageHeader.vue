<template>
  <div
    class="flex cursor-pointer flex-col items-center lg:flex-row lg:justify-between"
  >
    <RouterLink to="/">
      <img src="@/assets/images/greensexlogo.svg" alt="" class="w-[200px]"
    /></RouterLink>

    <div class="flex items-center gap-3 text-center">
      <RouterLink to="/contact"
        ><p
          class="lg:text-md text-[#84b18c] hover:underline hover:underline-offset-1 lg:text-[#40bd57]"
        >
          Contact Us
        </p></RouterLink
      >
      <p class="mb-2 text-xl font-extrabold text-[#40bd57]">.</p>
      <p
        class="text-[#84b18c] hover:underline hover:underline-offset-1 lg:text-[#40bd57]"
      >
        Pricing
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
