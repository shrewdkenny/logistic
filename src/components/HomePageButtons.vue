<template>
  <div
    class="mt-36 flex cursor-pointer flex-col items-center justify-center gap-2 lg:mt-48 lg:flex-row lg:gap-5"
  >
    <router-link to="/personalDeliveries">
      <Button
        variant="outline"
        class="bg-[#66cc66] px-28 py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black lg:px-20"
        >Personal Deliveries</Button
      >
    </router-link>

    <router-link to="/businessDeliveriesSignUp">
      <Button
        variant="outline"
        class="border border-black px-28 py-6 hover:border-[#66cc66] hover:text-[#66cc66] lg:px-20"
        >Business Deliveries</Button
      ></router-link
    >
  </div>
</template>

<script>
import { Button } from "@/components/ui/button";
export default {
  name: "Test",
  components: {
    Button,
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
