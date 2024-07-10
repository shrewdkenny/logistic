<template>
  <div class="flex flex-col gap-2">
    <div class="relative mt-7 w-full">
      <input
        type="type"
        class="w-[100%] rounded-lg border border-black px-2 py-3"
      />
      <label for="Email" class="absolute bottom-10 left-5 bg-white px-2"
        >Email</label
      >
    </div>
    <Button
      variant="outline"
      class="mt-8 w-[100%] bg-[#66cc66] py-6 text-[#ffffff]"
    >
      Create Account
    </Button>
  </div>
</template>

<script>
import ref from "vue";
export default {
  name: "Test",
  setup() {
    email: ref("");
    const baseUrl = import.meta.env.VITE_API_URL;
    const resendValidationLink = async () => {
      try {
      } catch (error) {}
    };

    return {
      email,
      resendValidationLink,
    };
  },
};
</script>

<style lang="scss" scoped></style>
