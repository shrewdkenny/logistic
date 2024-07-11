<template>
  <div class="py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div class="mt-40 flex items-center justify-center">
      <div class="flex w-[30%] flex-col gap-5">
        <h1 class="text-center text-2xl font-medium">Resend Verification</h1>
        <div class="relative mt-4 w-full">
          <input
            v-model="email"
            type="type"
            placeholder="i.e.xyz@emailprovider.com"
            class="w-full rounded-lg border border-black px-4 py-3"
          />
          <label
            for="first-name"
            class="absolute bottom-10 left-5 bg-white px-2"
            >First Name</label
          >
        </div>
        <Button
          @click="resendVerification"
          variant="outline"
          class="w-full bg-[#66cc66] py-6 text-[#ffffff]"
        >
          Resend
        </Button>
        <router-link to="/businessDeliveriesLogin">
          <p
            class="lg:text-md text-center text-[#84b18c] hover:underline hover:underline-offset-1 lg:text-[#40bd57]"
          >
            Login
          </p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import Swal from "sweetalert2";
export default {
  components: {
    HomePageHeader,
    Button,
  },
  setup() {
    const router = useRouter();
    const email = ref("");
    const baseUrl = import.meta.env.VITE_API_URL;
    const resendVerification = async () => {
      const userEmail = {
        email: email.value,
      };
      try {
        const response = await fetch(
          `${baseUrl}/api/auth/resend-verification-email`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userEmail),
          },
        );
        const data = await response.json();
        Swal.fire({
          position: "top-right",
          width: "300px",
          color: "red",
          background: "#eeeff8",
          title: `<p style='font-size: 15px; font-weight: 400; font-family: sans-serif;'>${data.message}</p>`,
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
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
    };
    return {
      email,
      resendVerification,
    };
  },
};
</script>
