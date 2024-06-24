<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div
      class="mt-4 flex flex-col items-center justify-center lg:mt-20"
      data-aos="fade-left"
    >
      <h1
        class="w-[100%] rounded-lg border border-b-4 border-[#c5c7cd] bg-[#fcfcfc] px-14 py-3 text-center text-xl font-normal shadow shadow-[#c0c0c0] lg:w-[600px] lg:py-3"
      >
        Calculate Dispatch Cost
      </h1>
      <PricingTable />
      <PricingAddressInputs />
      <Button
        variant="outline"
        class="mt-5 bg-[#66cc66] px-14 py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
        >Calculate price</Button
      >
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import PricingTable from "@/components/PricingTable.vue";
import PricingAddressInputs from "@/components/PricingAddressInputs.vue";
import { Button } from "@/components/ui/button";
import { onMounted } from "vue";
import Aos from "aos";
import "aos/dist/aos.css";
export default {
  name: "Test",
  components: {
    HomePageHeader,
    PricingTable,
    PricingAddressInputs,
    Button,
  },
  setup() {
    onMounted(() => {
      Aos.init();
    });
  },
};
</script>
