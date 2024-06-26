<template>
  <div class="flex w-full flex-col lg:w-2/5">
    <h1 class="text-center text-3xl font-normal leading-9">Login</h1>
    <BusinessDeliverySignUpInput label="Email" type="email" />
    <BusinessDeliverySignUpInput label="password" type="password" />
    <p class="mt-3 flex justify-end text-sm text-[#40bd57] underline">
      Forgot password?
    </p>
    <router-link to="/businessDashBoard">
      <Button
        variant="outline"
        class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
        >Login</Button
      ></router-link
    >

    <p class="mt-5 text-center text-sm font-normal">
      Don't have an account?
      <router-link to="/businessDeliveriesSignUp">
        <span class="text-red-500">Sign Up!</span></router-link
      >
    </p>
  </div>
</template>

<script>
import BusinessDeliverySignUpInput from "@/components/BusinessDeliverySignUpInput.vue";
import { Button } from "@/components/ui/button";
export default {
  name: "Test",
  components: {
    BusinessDeliverySignUpInput,
    Button,
  },
};
</script>

<style lang="scss" scoped></style>
