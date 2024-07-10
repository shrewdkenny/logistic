<template>
  <div class="flex w-full flex-col lg:w-2/5">
    <h1 class="text-center text-3xl font-normal leading-9">Login</h1>

    <div class="relative mt-7 w-full">
      <input
        v-model="email"
        type="text"
        class="w-[100%] rounded-lg border border-black px-2 py-3"
      />
      <label for="Email" class="absolute bottom-10 left-5 bg-white px-2"
        >Email</label
      >
    </div>
    <div class="relative mt-7 w-full">
      <input
        v-model="password"
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
    <Button
      v-if="logginIn"
      variant="outline"
      class="mt-8 w-[100%] border-[#66cc66] py-6"
    >
      <img :src="loader" alt="" class="w-10" />
    </Button>

    <Button
      v-else
      @click="loginUser"
      variant="outline"
      class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff]"
    >
      Login
    </Button>

    <p class="mt-5 text-center text-sm font-normal">
      Don't have an account?
      <router-link to="/businessDeliveriesSignUp">
        <span class="text-red-500">Sign Up!</span>
      </router-link>
    </p>
  </div>
</template>

<script>
import BusinessDeliverySignUpInput from "@/components/BusinessDeliverySignUpInput.vue";
import loader from "@/assets/images/loader.gif";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "Test",
  components: {
    BusinessDeliverySignUpInput,
    Button,
  },
  setup() {
    const router = useRouter();
    const baseUrl = import.meta.env.VITE_API_URL;
    const email = ref("");
    const password = ref("");
    const logginIn = ref(false);

    const loginUser = async () => {
      const userData = {
        email: email.value,
        password: password.value,
      };

      try {
        logginIn.value = true;
        const response = await fetch(`${baseUrl}/api/auth/login`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();

        if (data.message === "User login successful") {
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("user", JSON.stringify(data.user));
          router.push("/dashboard");
          Swal.fire({
            position: "top-right",
            color: "#ffffff",
            width: "300px",
            background: "#66cc66",
            timer: 2000,
            title: `<p style='font-size: 15px; font-weight: 400; font-family: sans-serif;'>${data.message}</p>`,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            position: "top-right",
            width: "300px",
            color: "red",
            background: "#eeeff8",
            title: `<p style='font-size: 15px; font-weight: 400; font-family: sans-serif;'>${data.message}</p>`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("An error occurred:", error);
        Swal.fire({
          position: "top-right",
          width: "300px",
          color: "red",
          background: "#eeeff8",
          title:
            "<p style='font-size: 15px; font-weight: 400; font-family: sans-serif;'>An error occurred.</p>",
          showConfirmButton: false,
          timer: 2000,
        });
      } finally {
        logginIn.value = false;
      }
    };

    return {
      loader,
      baseUrl,
      email,
      password,
      logginIn,
      loginUser,
    };
  },
};
</script>
