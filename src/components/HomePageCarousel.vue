<template>
  <div class="mt-5 flex flex-col items-center" data-aos="zoom-in">
    <img :src="currentImage" class="h-1/2 w-1/3" data-aos="zoom-in" />
    <h1 class="mt-4 text-2xl font-normal tracking-wider" data-aos="zoom-in">
      {{ carouselFirstWritings[currentIndex] }}
    </h1>
    <p data-aos="zoom-in">{{ carouselSecondWritings[currentIndex] }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import image1 from "@/assets/images/illustration1.png";
import image2 from "@/assets/images/illustration2.png";
import image3 from "@/assets/images/illustration3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Test",
  setup() {
    const images = ref([image1, image2, image3]);
    const currentIndex = ref(0);
    const currentImage = computed(() => images.value[currentIndex.value]);
    const carouselFirstWritings = ref([
      "Accessible and Affordable",
      "Tested and Trusted",
      "Safe and Secure",
    ]);
    const carouselSecondWritings = ref([
      "Fast. Reliable. Affordable",
      "Your trusted delivery partner.",
      "Swift and safe delivery of packages",
    ]);

    onMounted(() => {
      AOS.init();
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
      }, 4000);
    });

    return {
      currentImage,
      currentIndex,
      carouselFirstWritings,
      carouselSecondWritings,
    };
  },
};
</script>
