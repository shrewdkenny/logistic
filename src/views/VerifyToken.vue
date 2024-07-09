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
            color: "#66cc66",
            title:
              "<p style='font-size: 25px; font-weight: 500; font-family: sans-serif;'>verification successful</p>",
            showConfirmButton: false,
            timer: 100,
          }).then(() => {
            router.push("/businessDeliveriesLogin");
          });
        } else {
          Swal.fire({
            position: "center",
            color: "red",
            title:
              "<p style='font-size: 30px; font-weight: 500; font-family: sans-serif;'>Verification Failed.</p>",
            showConfirmButton: true,
            customClass: {
              confirmButton: "custom-confirm-button",
            },
            buttonsStyling: false,
            html: `
              <style>
                .swal2-confirm.custom-confirm-button {
                  border: none;
                  padding: 10px 20px;
                  background-color: #66cc66;
                  color: white;
                  border-radius: 5px;
                  outline: none; 
                }
              </style>
            `,
          }).then(() => {
            // router.push("/businessDeliveriesLogin");
          });
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          color: "red",
          title:
            "<p style='font-size: 30px; font-weight: 500; font-family: sans-serif;'>Verification Failed.</p>",
          showConfirmButton: true,
          customClass: {
            confirmButton: "custom-confirm-button",
          },
          buttonsStyling: false,
          html: `
              <style>
                .swal2-confirm.custom-confirm-button {
                  border: none;
                  padding: 10px 20px;
                  background-color: #66cc66;
                  color: white;
                  border-radius: 5px;
                  outline: none; 
                }
              </style>
            `,
        }).then(() => {
          // router.push("/businessDeliveriesLogin");
        });
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
