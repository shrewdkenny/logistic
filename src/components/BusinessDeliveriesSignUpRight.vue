<template>
  <div class="flex w-full flex-col lg:w-1/2">
    <h1 class="text-center text-3xl font-normal leading-9">Create Account</h1>
    <div class="flex flex-col gap-2">
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
        variant="outline"
        v-if="registering"
        class="mt-8 w-[100%] border-[#66cc66] py-6"
      >
        <img :src="loader" alt="" class="w-10" />
      </Button>
      <Button
        v-else
        @click="registerUser"
        variant="outline"
        class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff]"
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
import { useRouter } from "vue-router";
import loader from "@/assets/images/loader.gif";

export default {
  name: "BusinessDeliveriesSignUp",
  components: {
    BusinessDeliverySignUpInput,
    Button,
  },
  setup() {
    const router = useRouter();
    const baseUrl = import.meta.env.VITE_API_URL;
    const firstName = ref("");
    const lastName = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const passwordConfirmation = ref("");
    const email = ref("");
    const companyAddress = ref("");
    const acceptTerms = ref(false);
    const registering = ref(false);

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
      try {
        registering.value = true;
        const response = await fetch(`${baseUrl}/api/auth/register`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          router.push("/verify-signup");
        } else {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      } finally {
        registering.value = false;
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
      registering,
      loader,
    };
  },
};
</script>

<style lang="scss" scoped></style>
