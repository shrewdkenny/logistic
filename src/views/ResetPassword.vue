<template>
  <div class="py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div class="mt-40 flex items-center justify-center">
      <div class="flex w-[30%] flex-col gap-2">
        <h1 class="text-center text-2xl font-medium">Resend Password</h1>
        <div class="relative mt-4 w-full">
          <input
            v-model="email"
            type="type"
            placeholder="i.e.xyz@emailprovider.com"
            class="w-full rounded-lg border border-black px-4 py-3"
          />
          <label for="Email" class="absolute bottom-10 left-5 bg-white px-2"
            >Email</label
          >
        </div>
        <Button
          @click="forgetPassword"
          variant="outline"
          class="w-full bg-[#66cc66] py-6 text-[#ffffff]"
        >
          Continue
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import { useRouter } from "vue-router";
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
    const forgetPassword = async () => {
      const userEmail = {
        email: email.value,
      };
      try {
        const response = await fetch(`${baseUrl}/api/auth/forget-password`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userEmail),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          router.push("/settings");
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      email,
      baseUrl,
      forgetPassword,
      Swal,
    };
  },
};
</script>
