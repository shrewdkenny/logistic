<template>
  <div class="mt-5 flex cursor-pointer flex-col items-center">
    <img :src="currentImage" class="h-[200px]" />
    <h1 class="mt-10 text-2xl font-normal tracking-wider">
      {{ carouselFirstWritings[currentIndex] }}
    </h1>
    <p
      class="mt-5 text-sm font-normal tracking-wider text-gray-500"
      data-aos="zoom-in"
    >
      {{ carouselSecondWritings[currentIndex] }}
    </p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
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
