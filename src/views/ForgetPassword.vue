<template>
  <div class="py-5 lg:px-28 lg:py-10">
    <HomePageHeader />
    <div class="mt-40 flex items-center px-2 justify-center">
      <div class="flex lg:w-[30%] w-full flex-col gap-2">
        <h1 class="text-center text-2xl font-medium">Reset Password</h1>
        <div class="relative mt-4 w-full">
          <input
            v-model="email"
            type="text"
            placeholder="i.e.xyz@emailprovider.com"
            class="w-full rounded-lg border border-black px-4 py-3"
          />

          <label for="Email" class="absolute bottom-10 left-5 bg-white px-2"
            >Email</label
          >
        </div>

        <p class="text-center text-green-500">{{ successMessage }}</p>
        <p class="text-center text-red-600">{{ errorMessage }}</p>

        <Button
          v-if="loading"
          variant="outline"
          class="mt-8 w-[100%] border-[#66cc66] py-6"
        >
          <img :src="loader" alt="" class="w-10" />
        </Button>

        <Button
          v-else
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
import loader from "@/assets/images/loader.gif";
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
    const loading = ref(false);
    const email = ref("");
    const successMessage = ref("");
    const errorMessage = ref("");
    const baseUrl = import.meta.env.VITE_API_URL;
    const forgetPassword = async () => {
      const userEmail = {
        email: email.value,
      };
      try {
        loading.value = true;
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
          successMessage.value = data.message;
        } else {
          errorMessage.value = data.message;
        }
      } catch (error) {
        errorMessage.value = data.message;
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      email,
      baseUrl,
      forgetPassword,
      successMessage,
      errorMessage,
      Swal,
      loader,
    };
  },
};
</script>
