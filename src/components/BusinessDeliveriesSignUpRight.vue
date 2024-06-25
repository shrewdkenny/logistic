<template>
  <div class="flex w-full flex-col lg:w-1/2">
    <h1 class="text-center text-3xl font-normal leading-9">Create Account</h1>
    <div class="flex flex-col gap-2">
      <BusinessDeliverySignUpInput label="First Name" />
      <BusinessDeliverySignUpInput label="Last Name" />
      <BusinessDeliverySignUpInput
        label="Phone Number"
        type="number"
        placeholder="+234"
      />
      <BusinessDeliverySignUpInput label="Password" type="password" />
      <BusinessDeliverySignUpInput label="Confirm Password" type="password" />
      <BusinessDeliverySignUpInput label="Corporate Email" type="email" />
      <BusinessDeliverySignUpInput label="Company Address" />
      <div class="mt-5 flex items-center gap-1">
        <input type="checkbox" />
        <p class="text-sm font-medium">Accept terms and conditions</p>
      </div>
      <Button
        variant="outline"
        class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
        >Create Account</Button
      >
      <p class="mt-5 text-center text-sm font-normal">
        Already have an account?
        <RouterLink to="/businessDeliveriesLogin">
          <span class="text-red-500">Log In!</span></RouterLink
        >
      </p>
    </div>
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
  setup() {},
};
</script>

<style lang="scss" scoped></style>
