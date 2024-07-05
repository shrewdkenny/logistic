<template>
  <div class="bg-[#ffffff] py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div class="mt-20 flex justify-center">
      <div class="flex flex-col items-center">
        <img src="@/assets/images/emailpic.png" alt="" class="w-[40%]" />
        <h1 class="text-3xl font-semibold mt-2">Welcome!</h1>
        <p class="mt-5 text-center">
          We have sent a verification link to your email address, please verify
          berore you can login to account, <br />
          thank you!
        </p>

        <Button
          variant="outline"
          class="mt-5 bg-[#66cc66] px-28 py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black lg:px-20"
          >Verified & Login</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import { Button } from "@/components/ui/button";
export default {
  name: "Test",
  components: {
    HomePageHeader,
    Button,
  },
};
</script>
