<template>
  <div class="flex h-screen w-full items-center justify-center bg-[#ffffff]">
    <img :src="loader" alt="" v-if="verifying" />
  </div>
</template>

<script>
import loader from "@/assets/images/loader.gif";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";

export default {
  name: "Test",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const verifying = ref(true);
    const baseUrl = import.meta.env.VITE_API_URL;

    const verifyToken = async () => {
      try {
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

        if (data.success) {
          Swal.fire({
            position: "center",
            width: "60%",
            color: "black",
            title:
              "<p style='font-size: 20px; font-family: sans-serif;'>verification successful</p>",
            showConfirmButton: false,
            timer: 500,
          });
          setTimeout(() => {
            router.push("/dashboard");
          }, 2000);
        } else {
          Swal.fire({
            position: "center",
            width: "60%",
            color: "black",
            title:
              "<p style='font-size: 20px; font-family: sans-serif; text-align: center;'>verification failed. <br/> New verification sent</p>",
            showConfirmButton: true,
            // timer: 500,
          });
          setTimeout(() => {
            router.push("/businessDeliveriesLogin");
          }, 2000);
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          width: "200px",
          color: "black",
          title:
            "<p style='font-size: 20px; font-family: sans-serif; text-align: center;'>verification failed. <br/> New verification sent</p>",
          showConfirmButton: true,
          // timer: 500,
        });
        setTimeout(() => {
          router.push("/businessDeliveriesLogin");
        }, 2000);
      } finally {
        verifying.value = false;
      }
    };

    onMounted(() => {
      verifyToken();
    });

    return {
      verifying,
      loader,
      Swal,
    };
  },
};
</script>
