<template>
  <div
    class="mt-10 grid cursor-pointer grid-cols-1 gap-2 px-3 lg:grid-cols-2 lg:px-28"
  >
    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">create new dispatch</h1>
      <img :src="shipping" alt="" class="w-14" />
    </div>
    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">View pending orders</h1>
      <img :src="pending" alt="" class="w-14" />
    </div>
    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">View Order History</h1>
      <img :src="history" alt="" class="w-14" />
    </div>
    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">Fund Your Wallet</h1>
      <img :src="wallet" alt="" class="w-14" />
    </div>
  </div>
</template>

<script>
import shipping from "@/assets/images/shipping.svg";
import pending from "@/assets/images/pending.svg";
import history from "@/assets/images/history.svg";
import wallet from "@/assets/images/wallet.svg";
export default {
  name: "Test",
  setup() {
    return {
      shipping,
      pending,
      history,
      wallet,
    };
  },
};
</script>

<style lang="scss" scoped></style>
