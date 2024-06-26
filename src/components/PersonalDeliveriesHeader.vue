<template>
  <div class="mt-10 flex px-2 lg:items-center lg:gap-[25%] lg:px-10">
    <router-link to="/">
      <div class="cursor-pointer font-extrabold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-8"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg></div
    ></router-link>

    <div class="flex flex-col text-center">
      <h1 class="text-2xl font-medium tracking-wider">Request Dispatch</h1>
      <p class="mt-6 text-center text-sm font-medium tracking-wider lg:mt-2">
        Request a dispatch to pick and deliver your parcel in no time.
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
