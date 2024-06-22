<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div
      class="mt-20 flex flex-col items-center justify-center gap-20"
      data-aos="fade-left"
    >
      <h1
        class="rounded-lg border-2 border-[#c5c7cd] bg-[#fcfcfc] px-48 py-3 text-xl font-normal"
      >
        Calculate Dispatch Cost
      </h1>
      <div></div>
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
