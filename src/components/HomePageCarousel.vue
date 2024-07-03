<template>
  <div
    class="mt-5 flex cursor-pointer flex-col items-center"
   
  >
    <img :src="slider[currentIndex].picture" class="h-60"/>
    <h1 class="mt-5 text-2xl tracking-wider">
      {{ slider[currentIndex].headline }}
    </h1>
    <p class="mt-4 text-sm tracking-wider text-gray-500">
      {{ slider[currentIndex].title }}
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import image1 from "@/assets/images/illustration1.png";
import image2 from "@/assets/images/illustration2.png";
import image3 from "@/assets/images/illustration3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Test",
  setup() {
    const slider = ref([
      {
        picture: image1,
        headline: "Accessible and Affordable",
        title: "Fast. Reliable. Affordable.",
      },
      {
        picture: image2,
        headline: "Tested and Trusted",
        title: "Your trusted delivery partner",
      },
      {
        picture: image3,
        headline: "Safe and Secure",
        title: "Swift and safe delivery of packages.",
      },
    ]);
    const currentIndex = ref(0);

    onMounted(() => {
      AOS.init();
      setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slider.value.length;
      }, 3000);
    });

    return {
      slider,
      currentIndex,
    };
  },
};
</script>
