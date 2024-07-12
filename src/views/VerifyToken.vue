<template>
  <div class="py-5 lg:px-28 lg:py-10">
    <HomePageHeader />

    <div
      class="flex h-screen w-full flex-col items-center justify-center bg-[#ffffff]"
    >
      <img :src="loader" alt="" v-if="verifying" />
      <div v-else class="flex flex-col gap-5">
        <p class="text-lg text-red-500">{{ message }}</p>
        <router-link to="/businessDeliveriesLogin">
          <Button
            variant="outline"
            class="w-full bg-[#66cc66] py-6 text-[#ffffff]"
          >
            Login
          </Button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
import HomePageHeader from "@/components/HomePageHeader.vue";
import loader from "@/assets/images/loader.gif";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "Test",
  components: {
    HomePageHeader,
    Button,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const verifying = ref(true);
    const message = ref("");
    const requestSent = ref(false);
    const baseUrl = import.meta.env.VITE_API_URL;

    const verifyToken = async () => {
      if (requestSent.value) return;

      try {
        requestSent.value = true;
        const token = route.query.verify_token;

        const response = await fetch(
          `${baseUrl}/api/auth/verify-email/?verify_token=${token}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        if (response.ok) {
          Swal.fire({
            position: "top-right",
            color: "#ffffff",
            width: "300px",
            background: "#66cc66",
            timer: 2000,
            title: `<p style='font-size: 15px; font-weight: 400; font-family: sans-serif;'>${data.message}</p>`,
            showConfirmButton: false,
          }).then(() => {
            router.push("/businessDeliveriesLogin");
          });
        } else {
          message.value = data.message;
        }
      } catch (error) {
        message.value = data.message;
      } finally {
        verifying.value = false;
      }
    };

    onMounted(() => {
      verifyToken();
    });

    return {
      verifying,
      message,
      loader,
      Swal,
    };
  },
};
</script>
