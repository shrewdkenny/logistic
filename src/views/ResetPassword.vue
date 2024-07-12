<template>
  <div class="py-5 lg:px-28">
    <HomePageHeader />
  </div>
  <div class="flex h-screen flex-col p-2 lg:p-4 lg:items-center">
    <div class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden">
      <h1>change password</h1>
    </div>
    <div class="mt-3 flex flex-col rounded-xl bg-[#ffffff] lg:p-6 lg:w-[50%]">
      <h1 class="font-medium">Change Password</h1>
      <div class="mt-5 flex flex-col gap-4">
        <div>
          <label for="Password" class="text-sm">New Password</label>
          <Input
            v-model="password"
            type="password"
            class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
          />
        </div>

        <div>
          <label for="Confimr Password" class="text-sm">Confirm Password</label>
          <Input
            v-model="confirmPassword"
            type="password"
            class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
          />
          <p class="mt-2 text-center text-red-500">{{ message }}</p>
        </div>
        <Button
          v-if="resetting"
          variant="outline"
          class="mt-8 w-[100%] border-[#66cc66] py-6"
        >
          <img :src="loader" alt="" class="w-10" />
        </Button>

        <Button
          v-else
          @click="resetPassword"
          variant="outline"
          class="bg-[#66cc66] px-20 py-6 text-[#ffffff]"
          >Change Password</Button
        >

        <h1 class="mt-5 font-normal tracking-wider">Contact Details</h1>
        <p class="text-md text-[#40bd57]">+234 814 337 1347</p>
        <div class="flex gap-1">
          <img src="@/assets/images/instagram.svg" alt="" class="w-5" />
          <p class="text-[#40bd57]">@greensexlogistic</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/ui/input/Input.vue";
import { Button } from "@/components/ui/button";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import HomePageHeader from "@/components/HomePageHeader.vue";
import loader from "@/assets/images/loader.gif";

export default {
  name: "Test",
  components: {
    Input,
    Button,
    HomePageHeader,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const password = ref("");
    const confirmPassword = ref("");
    const message = ref("");
    const resetting = ref(false);
    const baseUrl = import.meta.env.VITE_API_URL;
    const resetPassword = async () => {
      const userPassword = {
        password: password.value,
        confirmPassword: confirmPassword.value,
      };
      try {
        resetting.value = true;
        const token = route.query.password_token;
        const response = await fetch(
          `${baseUrl}/api/auth/reset-password?password_token=${token}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userPassword),
          },
        );
        const data = await response.json();
        if (response.ok) {
          Swal.fire({
            position: "top-right",
            width: "300px",
            color: "green",
            background: "#eeeff8",
            title: `<p style='font-size: 15px; font-weight: 400; font-family: sans-serif;'>${data.message}</p>`,
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            router.push("/businessDeliveriesLogin");
          });
        } else {
          message.value = data.message;
        }
      } catch (error) {
        message.value = data.message;
      } finally {
        resetting.value = false;
      }
    };
    return {
      password,
      confirmPassword,
      message,
      resetting,
      loader,
      resetPassword,
      Swal,
    };
  },
};
</script>
