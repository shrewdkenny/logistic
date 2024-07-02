<template>
  <div class="flex h-fit">
    <div class="lg:w-[20%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>

    <div class="w-full lg:w-4/5">
      <div>
        <BusinessDashBoardHeader Heading="Support" />
      </div>
      <div class="flex w-full justify-center bg-[#edeef7] p-5">
        <div class="flex w-full lg:w-[50%] flex-col rounded-xl bg-[#ffffff] p-6">
          <h1 class="font-medium">Have Issues? Send Us a Message!</h1>
          <div class="mt-5 flex flex-col gap-4">
            <div>
              <label for="your email" class="text-sm">Your Email</label>
              <Input
                class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
              />
            </div>
            <div>
              <label for="subject" class="text-sm">subject</label>
              <Input
                class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
              />
            </div>
            <div>
              <p>Message</p>
              <Textarea />
            </div>
            <Button
              variant="outline"
              class="bg-[#66cc66] px-20 py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
              >Send Message</Button
            >

            <h1 class="font-normal tracking-wider mt-5">Contact Details</h1>
            <p class="text-md  text-[#40bd57]">+234 814 337 1347</p>
            <div class="flex gap-3">
              <img src="@/assets/images/instagram.svg" alt="" class="w-5" />
              <p class="text-[#40bd57]">@greensexlogistic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import Input from "@/components/ui/input/Input.vue";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    Input,
    Button,
    Textarea,
  },
};
</script>
