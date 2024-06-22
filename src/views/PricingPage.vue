<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div data-aos="fade-left">pricing page</div>
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
