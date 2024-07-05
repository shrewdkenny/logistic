<template>
  <div class="flex w-full flex-col lg:w-1/2">
    <h1 class="text-center text-3xl font-normal leading-9">Create Account</h1>
    <div class="flex flex-col gap-2">
      <BusinessDeliverySignUpInput label="First Name" v-model="firstName" />
      <BusinessDeliverySignUpInput label="Last Name" v-model="lastName" />
      <BusinessDeliverySignUpInput
        label="Phone Number"
        type="number"
        placeholder="+234"
        v-model="phoneNumber"
      />
      <BusinessDeliverySignUpInput
        label="Password"
        type="password"
        v-model="password"
      />
      <BusinessDeliverySignUpInput
        label="Confirm Password"
        type="password"
        v-model="password"
      />
      <BusinessDeliverySignUpInput
        label="Corporate Email"
        type="email"
        v-model="email"
      />
      <BusinessDeliverySignUpInput
        label="Company Address"
        v-model="companyAddress"
      />
      <div class="mt-5 flex items-center gap-1">
        <input type="checkbox" v-model="acceptTerms" />
        <p class="text-sm font-medium">Accept terms and conditions</p>
      </div>
      <Button
        @click="registerUser"
        variant="outline"
        class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
        >Create Account</Button
      >
      <p class="mt-5 text-center text-sm font-normal">
        Already have an account?
        <router-link to="/businessDeliveriesLogin">
          <span class="text-red-500">Log In!</span></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import BusinessDeliverySignUpInput from "@/components/BusinessDeliverySignUpInput.vue";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
export default {
  name: "Test",
  components: {
    BusinessDeliverySignUpInput,
    Button,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const email = ref("");
    const companyAddress = ref("");
    const acceptTerms = ref(true);
    const registerUser = async () => {
      const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        confirmPassword: password.value,
        email: email.value,
        companyAddress: companyAddress.value,
        acceptTerms: acceptTerms.value,
      };

      try {
        const response = await fetch("", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          return console.log("registration successful");
        }
      } catch (error) {
        console.log(error);
      }
    };
    return {
      firstName,
      lastName,
      phoneNumber,
      password,
      confirmPassword,
      email,
      companyAddress,
      acceptTerms,
      registerUser,
    };
  },
};
</script>

<style lang="scss" scoped></style>
