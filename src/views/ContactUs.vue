<template>
  <div class="bg-[#ffffff] px-5 py-5 lg:py-10 lg:px-28">
    <HomePageHeader />
    <div
      class="mt-10 flex flex-col justify-center gap-20 lg:flex-row"
      data-aos="fade-left"
    >
      <div class="flex flex-col gap-4">
        <h1>Have Issues? Send Us a Message!</h1>
        <div>
          <label for="email" class="text-sm">Your Email</label>
          <Input />
        </div>
        <div>
          <label for="subject">Subject</label>
          <Input />
        </div>

        <div>
          <h1>message</h1>
          <Textarea />
        </div>
        <Button
          variant="outline"
          class="bg-[#66cc66] py-6 text-[#ffffff] lg:px-20"
          >Send message</Button
        >
      </div>

      <div>contact details</div>
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

<style lang="scss" scoped></style>
