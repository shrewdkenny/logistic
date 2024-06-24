<template>
  <div
    class="mt-10 flex w-full flex-col rounded-xl p-10 lg:shadow-md lg:shadow-[#40bd57]"
  >
    <div class="flex gap-10">
      <div class="flex w-1/2 flex-col gap-5">
        <div>
          <label for="item" class="text-sm">Item</label>
          <Input />
        </div>
        <div>
          <label for="quantity" class="text-sm">Quantity</label>
          <Input />
        </div>
      </div>
      <div class="flex w-1/2 flex-col">
        <h1>Description</h1>
        <Textarea class="h-32" />
      </div>
    </div>

    <div class="flex gap-10">
      <div class="flex w-1/2 flex-col gap-5">
        <h1 class="mt-10 text-2xl font-medium">PICK UP</h1>
        <div>
          <label for="Name" class="text-sm">Name</label>
          <Input />
        </div>
        <div>
          <label for="Phone Number" class="text-sm">Phone Number</label>
          <Input
            placeholder="+234-"
            class="px-2 placeholder:text-lg placeholder:tracking-wide placeholder:text-black"
          />
        </div>

        <div>
          <label for="Address" class="text-sm">Address</label>
          <Input
            placeholder="search places..."
            class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
          />
        </div>
        <div>
          <label for="Landmark" class="text-sm">Pickup Landmark</label>
          <Input />
        </div>
      </div>

      <div class="flex w-1/2 flex-col gap-5">
        <h1 class="mt-10 text-2xl font-medium">DROP OFF</h1>
        <div>
          <label for="Name" class="text-sm">Name</label>
          <Input />
        </div>
        <div>
          <label for="Phone Number" class="text-sm">Phone Number</label>
          <Input
            placeholder="+234-"
            class="px-2 placeholder:text-lg placeholder:tracking-wide placeholder:text-black"
          />
        </div>

        <div>
          <label for="Address" class="text-sm">Address</label>
          <Input
            placeholder="search places..."
            class="px-2 font-medium tracking-wide placeholder:text-lg placeholder:text-[#a8a8a8]"
          />
        </div>
        <div>
          <label for="Landmark" class="text-sm">Dropoff Landmark</label>
          <Input />
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-center">
      <Button
        variant="outline"
        class="bg-[#66cc66] py-6 text-[#ffffff] hover:border-black hover:bg-[#ffffff] hover:text-black lg:px-20"
        >Proceed</Button
      >
    </div>
  </div>
</template>

<script>
import HomePageHeader from "@/components/HomePageHeader.vue";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default {
  name: "Test",
  components: {
    Input,
    Textarea,
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
