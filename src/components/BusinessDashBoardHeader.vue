<template>
  <div
    class="sticky top-0 flex justify-between bg-[#ffffff] px-10 py-8 shadow-lg shadow-[#edeef6]"
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
