<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div
      class="mt-5 flex flex-row lg:mt-20 lg:justify-between"
      data-aos="fade-left"
    >
      <BusinessDeliveriesSignUpLeft class="hidden lg:flex lg:flex-col" />
      <BusinessDeliveriesSignUpRight />
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import BusinessDeliveriesSignUpLeft from "@/components/BusinessDeliveriesSignUpLeft.vue";
import BusinessDeliveriesSignUpRight from "@/components/BusinessDeliveriesSignUpRight.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
export default {
  name: "Test",
  components: {
    HomePageHeader,
    BusinessDeliveriesSignUpLeft,
    BusinessDeliveriesSignUpRight,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
