<template>
  <div class="bg-[#ffffff] py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div data-aos="fade-left">
      <HomePageCarousel />
      <HomePageButtons />
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import HomePageCarousel from "@/components/HomePageCarousel.vue";
import HomePageButtons from "@/components/HomePageButtons.vue";

export default {
  name: "Test",
  components: {
    HomePageHeader,
    HomePageCarousel,
    HomePageButtons,
  },
  setup() {
    return {};
  },
};
</script>
