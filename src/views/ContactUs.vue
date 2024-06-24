<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div
      class="mt-10 flex flex-col justify-center gap-4 lg:flex-row lg:gap-20"
      data-aos="fade-left"
    >
      <div class="flex flex-col gap-4">
        <h1 class="font-normal tracking-wider">
          Have Issues? Send Us a Message!
        </h1>
        <div>
          <label for="email" class="text-sm">Your Email</label>
          <Input />
        </div>
        <div>
          <label for="subject">Subject</label>
          <Input />
        </div>

        <div class="flex flex-col">
          <h1>Message</h1>
          <Textarea />
        </div>
        <Button
          variant="outline"
          class="bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black lg:px-20"
          >Send message</Button
        >
      </div>
      <div>
        <h1 class="font-normal tracking-wider">Contact Details</h1>
        <p class="text-md mt-4 text-[#40bd57]">+234 814 337 1347</p>
        <div class="mt-3 flex gap-3">
          <img src="@/assets/images/instagram.svg" alt="" class="w-5" />
          <p class="text-[#40bd57]">@greensexlogistic</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
export default {
  name: "Test",
  components: {
    HomePageHeader,
    Input,
    Textarea,
    Button,
  },

  setup() {
    onMounted(() => {
      AOS.init();
    });

    return {};
  },
};
</script>
