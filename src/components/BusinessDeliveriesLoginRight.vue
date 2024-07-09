<template>
  <h1 v-if="verifying">loggin in....</h1>
  <div class="flex w-full flex-col lg:w-2/5">
    <h1 class="text-center text-3xl font-normal leading-9">Login</h1>

    <div class="relative mt-7 w-full">
      <input
        type="text"
        class="w-[100%] rounded-lg border border-black px-2 py-3"
      />
      <label for="Email" class="absolute bottom-10 left-5 bg-white px-2"
        >Email</label
      >
    </div>
    <div class="relative mt-7 w-full">
      <input
        type="password"
        class="w-[100%] rounded-lg border border-black px-2 py-3"
      />
      <label for="Password" class="absolute bottom-10 left-5 bg-white px-2"
        >Password</label
      >
    </div>

    <p class="mt-3 flex justify-end text-sm text-[#40bd57] underline">
      Forgot password?
    </p>
    <router-link to="/dashBoard">
      <Button
        @click="verifyingToken"
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
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Test",
  components: {
    BusinessDeliverySignUpInput,
    Button,
  },

  setup() {
    const router = useRouter();
    const verifying = ref(true);
    const verifyingToken = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/verify-email?verify_token=${token}`,
          {
            params: { verify_token: token },
          },
        );
        if (response.data.success) {
          console.log("successfully logged in");
          return setTimeout(() => {
            router.push("/dashboard");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
      } finally {
        verifying.value = false;
      }
    };
    return {
      verifying,
      verifyingToken,
    };
  },
};
</script>

<style lang="scss" scoped></style>
