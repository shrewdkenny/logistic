<template>
  <div class="flex w-full flex-col lg:w-1/2">
    <h1 class="text-center text-3xl font-normal leading-9">Create Account</h1>
    <div class="flex flex-col gap-2">
      <!-- <BusinessDeliverySignUpInput label="First Name" v-model="firstName" />
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
        v-model="confirmPassword"
      />
      <BusinessDeliverySignUpInput
        label="Corporate Email"
        type="email"
        v-model="email"
      />
      <BusinessDeliverySignUpInput
        label="Company Address"
        v-model="companyAddress"
      /> -->

      <div class="relative mt-7 w-full">
        <input
          v-model="firstName"
          type="type"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label for="first-name" class="absolute bottom-10 left-5 bg-white px-2"
          >First Name</label
        >
      </div>
      <div class="relative mt-7 w-full">
        <input
          v-model="lastName"
          type="type"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label for="last-name" class="absolute bottom-10 left-5 bg-white px-2"
          >Last Name</label
        >
      </div>
      <div class="relative mt-7 w-full">
        <input
          v-model="phoneNumber"
          placeholder="+234"
          type="type"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label
          for="phone-number"
          class="absolute bottom-10 left-5 bg-white px-2"
          >Phone Number</label
        >
      </div>
      <div class="relative mt-7 w-full">
        <input
          v-model="password"
          type="password"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label for="password" class="absolute bottom-10 left-5 bg-white px-2"
          >password</label
        >
      </div>
      <div class="relative mt-7 w-full">
        <input
          v-model="passwordConfirmation"
          type="password"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label
          for="confirm-password"
          class="absolute bottom-10 left-5 bg-white px-2"
          >Confirm Password</label
        >
      </div>
      <div class="relative mt-7 w-full">
        <input
          v-model="email"
          type="type"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label
          for="Corporate Email"
          class="absolute bottom-10 left-5 bg-white px-2"
          >Corporate Email</label
        >
      </div>
      <div class="relative mt-7 w-full">
        <input
          v-model="companyAddress"
          type="type"
          class="w-[100%] rounded-lg border border-black px-2 py-3"
        />
        <label
          for="Corporate Email"
          class="absolute bottom-10 left-5 bg-white px-2"
          >Company Address</label
        >
      </div>

      <div class="mt-5 flex items-center gap-1">
        <input type="checkbox" v-model="acceptTerms" />
        <p class="text-sm font-medium">Accept terms and conditions</p>
      </div>
      <Button
        @click="registerUser"
        variant="outline"
        class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black"
      >
        Create Account
      </Button>
      <p class="mt-5 text-center text-sm font-normal">
        Already have an account?
        <router-link to="/businessDeliveriesLogin">
          <span class="text-red-500">Log In!</span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import BusinessDeliverySignUpInput from "@/components/BusinessDeliverySignUpInput.vue";
import { Button } from "@/components/ui/button";
import { ref } from "vue";

export default {
  name: "BusinessDeliveriesSignUp",
  components: {
    BusinessDeliverySignUpInput,
    Button,
  },
  setup() {
    const baseUrl = import.meta.env.VITE_API_URL;
    const firstName = ref("");
    const lastName = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const passwordConfirmation = ref("");
    const email = ref("");
    const companyAddress = ref("");
    const acceptTerms = ref(false);

    const registerUser = async () => {
      const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        email: email.value,
        companyAddress: companyAddress.value,
        acceptTerms: acceptTerms.value,
      };

      // Debugging the form data
      console.log(userData);

      try {
        const response = await fetch(`${baseUrl}/api/auth/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          console.log("Registration successful");
        } else {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };

    return {
      firstName,
      lastName,
      phoneNumber,
      password,
      passwordConfirmation,
      email,
      companyAddress,
      acceptTerms,
      registerUser,
    };
  },
};
</script>

<style lang="scss" scoped></style>
