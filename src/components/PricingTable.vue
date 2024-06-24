<template>
  <div
    class="mt-8 flex w-[100%] flex-col rounded-xl border-2 border-[#c0c0c0] bg-[#fcfcfc] lg:w-[500px]"
  >
    <div class="flex items-center gap-1 border-b-2 border-[#c0c0c0] p-2">
      <img src="@/assets/images/bike.png" alt="" class="w-6" />
      <h1 class="text-sm">BIKE</h1>
    </div>
    <div class="flex items-center gap-5 border-b-2 border-[#c0c0c0]">
      <div class="flex flex-col gap-2 p-2 text-[17px] font-thin">
        <h1>Distance:</h1>
        <h1>Rate:</h1>
        <h1>Base Price:</h1>
        <h1>Base Distance:</h1>
        <h1>VAT:</h1>
      </div>

      <div class="flex flex-col gap-2 text-[17px] font-thin">
        <p class="">-</p>
        <p class="">N60(per km)</p>
        <p class="">N600</p>
        <p class="">10km</p>
        <p class="">-(7.5%)</p>
      </div>
    </div>

    <div class="flex justify-between p-2">
      <h1>TOTAL PRICE</h1>
      <h1>N0.00</h1>
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
