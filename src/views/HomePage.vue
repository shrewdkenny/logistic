<template>
  <div class="bg-[#ffffff] px-28 py-10">
    <HomePageHeader />
    <HomePageCarousel />
    <HomePageButtons />
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
    HomePageButtons
  },
  setup() {
    return {};
  },
};
</script>
