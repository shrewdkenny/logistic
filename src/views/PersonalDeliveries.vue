<template>
  <div class="bg-[#ffffff] py-5 lg:px-28 lg:py-8">
    <HomePageHeader />
    <div class="">
      <!-- data-aos="fade-left" -->
      <PersonalDeliveriesHeader />
      <PersonalDeliveriesForm />
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import PersonalDeliveriesHeader from "@/components/PersonalDeliveriesHeader.vue";
import PersonalDeliveriesForm from "@/components/PersonalDeliveriesForm.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
export default {
  name: "Test",
  components: {
    HomePageHeader,
    PersonalDeliveriesHeader,
    PersonalDeliveriesForm,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
