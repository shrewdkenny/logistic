<template>
  <div class="relative mt-7 w-full">
    <input
      :type="type"
      :placeholder="placeholder"
      class="rounded-lg border border-black py-3 px-2 w-[100%]"
    />
    <label for="first-name" class="absolute bottom-10 left-5 bg-white px-2">{{
      label
    }}</label>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Test",
  props: {
    label: String,
    type: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped></style>
