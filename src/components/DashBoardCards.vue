<template>
  <div
    class="mt-10 grid cursor-pointer grid-cols-1 gap-2 px-3 lg:grid-cols-2 lg:px-28"
  >
    <router-link to="/new-dispatch">
      <div
        class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
      >
        <h1 class="text-lg font-normal text-[#545c63]">create new dispatch</h1>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="box-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-box-alt fa-w-14 fa-7x"
        >
          <g class="fa-group">
            <path
              fill="currentColor"
              d="M256 32l32 128v112a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16V160l32-128z"
              class="fa-secondary"
            ></path>
            <path
              fill="currentColor"
              d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 0 0 360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 0 0-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16v-80H0v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192z"
              class="text-[#3799fb]"
            ></path>
          </g>
        </svg>
        <!-- <img :src="shipping" alt="" class="w-14" /> -->
      </div></router-link
    >

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
