<template>
  <div class="flex w-full flex-col lg:w-1/2">
    <h1 class="text-center text-3xl font-normal leading-9">Create Account</h1>
    <div class="flex flex-col gap-2">
      <BusinessDeliverySignUpInput
        v-model:modelValue="firstName"
        label="First Name"
        type="text"
        placeholder="Enter your first name"
      />
      <p v-if="errors.firstName" class="text-sm text-red-500">
        {{ errors.firstName }}
      </p>

      <BusinessDeliverySignUpInput
        v-model:modelValue="lastName"
        label="Last Name"
        type="text"
        placeholder="Enter your last name"
      />
      <p v-if="errors.lastName" class="text-sm text-red-500">
        {{ errors.lastName }}
      </p>

      <BusinessDeliverySignUpInput
        v-model:modelValue="phoneNumber"
        label="Phone Number"
        type="number"
        placeholder="+234"
      />
      <p v-if="errors.phoneNumber" class="text-sm text-red-500">
        {{ errors.phoneNumber }}
      </p>

      <BusinessDeliverySignUpInput
        v-model:modelValue="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <p v-if="errors.password" class="text-sm text-red-500">
        {{ errors.password }}
      </p>

      <BusinessDeliverySignUpInput
        v-model:modelValue="passwordConfirmation"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
      />
      <p v-if="errors.passwordConfirmation" class="text-sm text-red-500">
        {{ errors.passwordConfirmation }}
      </p>

      <BusinessDeliverySignUpInput
        v-model:modelValue="email"
        label="Corporate Email"
        type="email"
        placeholder="Enter your corporate email"
      />
      <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>

      <BusinessDeliverySignUpInput
        v-model:modelValue="companyAddress"
        label="Company Address"
        type="text"
        placeholder="Enter your company address"
      />
      <p v-if="errors.companyAddress" class="text-sm text-red-500">
        {{ errors.companyAddress }}
      </p>
      <p class="text-center text-sm text-red-500">{{ message }}</p>
      <div class="mt-5 flex items-center gap-1">
        <input v-model="acceptTerms" required type="checkbox" />
        <p class="text-sm font-medium">Accept terms and conditions</p>
      </div>
      <p v-if="errors.acceptTerms" class="text-sm text-red-500">
        {{ errors.acceptTerms }}
      </p>

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
import Swal from "sweetalert2";

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
    const errors = ref({});
    const message = ref("");

    const validateForm = () => {
      const newErrors = {};
      if (!firstName.value) newErrors.firstName = "First Name cannot be empty";
      if (!lastName.value) newErrors.lastName = "Last Name cannot be empty";
      if (!phoneNumber.value)
        newErrors.phoneNumber = "Phone Number cannot be empty";
      if (!password.value) newErrors.password = "Password cannot be empty";
      if (!passwordConfirmation.value)
        newErrors.passwordConfirmation =
          "Password Confirmation cannot be empty";
      if (!email.value) newErrors.email = "Email cannot be empty";
      if (!companyAddress.value)
        newErrors.companyAddress = "Company Address cannot be empty";
      if (!acceptTerms.value)
        newErrors.acceptTerms = "You must accept the terms and conditions";
      errors.value = newErrors;
      return Object.keys(newErrors).length === 0;
    };

    const registerUser = async () => {
      if (!validateForm()) {
        return;
      }

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
        const data = await response.json();
        if (response.ok) {
          router.push("/verify-signup");
        } else {
          message.value = data.message;
        }
      } catch (error) {
        message.value = data.message;
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
      validateForm,
      registerUser,
      registering,
      loader,
      errors,
      message,
    };
  },
};
</script>

<style scoped></style>
