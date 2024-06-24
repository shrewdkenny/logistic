<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div class="mt-4 flex flex-col items-center justify-center lg:mt-20">
      <!-- data-aos="fade-left" -->
      <h1
        class="rounded-lg border border-b-4 border-[#c5c7cd] bg-[#fcfcfc] px-14 py-3 text-xl font-semibold shadow shadow-[#c0c0c0] lg:px-48 lg:py-3"
      >
        Calculate Dispatch Cost
      </h1>
      <div
        class="mt-6 flex w-[500px] flex-col rounded-xl border-2 border-[#c0c0c0]"
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
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "Test",
  components: {
    HomePageHeader,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
