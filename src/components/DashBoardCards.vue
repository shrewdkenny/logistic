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
          class="w-14"
        >
          <g class="fa-group">
            <path
              fill="currentColor"
              d="M256 32l32 128v112a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16V160l32-128z"
              class="text-[#c1defd]"
            ></path>
            <path
              fill="currentColor"
              d="M446.7 160c.4-.5.5-.7.9-1.2L391.3 53.9A32 32 0 0 0 360.9 32H256l32 128zM160 160l32-128H87.1a32 32 0 0 0-30.4 21.9L.4 158.8c.4.5.5.7.9 1.2zm128 32v80a16 16 0 0 1-16 16h-96a16 16 0 0 1-16-16v-80H0v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192z"
              class="text-[#3799fb]"
            ></path>
          </g>
        </svg></div
    ></router-link>

    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">View pending orders</h1>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fad"
        data-icon="clock"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-14"
      >
        <g class="fa-group">
          <path
            fill="currentColor"
            d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
            class="text-[#f5becd]"
          ></path>
          <path
            fill="currentColor"
            d="M348.49,321h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"
            class="text-[#ed4b5f]"
          ></path>
        </g>
      </svg>
    </div>
    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">View Order History</h1>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fad"
        data-icon="history"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-14"
      >
        <g class="fa-group">
          <path
            fill="currentColor"
            d="M141.68 400.23a184 184 0 1 0-11.75-278.3l50.76 50.76c10.08 10.08 2.94 27.31-11.32 27.31H24a16 16 0 0 1-16-16V38.63c0-14.26 17.23-21.4 27.31-11.32l49.38 49.38A247.14 247.14 0 0 1 256 8c136.81 0 247.75 110.78 248 247.53S392.82 503.9 256.18 504a247 247 0 0 1-155.82-54.91 24 24 0 0 1-1.84-35.61l11.27-11.27a24 24 0 0 1 31.89-1.98z"
            class="text-[#fce3b6]"
          ></path>
          <path
            fill="currentColor"
            d="M288 152v104.35L328.7 288a24 24 0 0 1 4.21 33.68l-9.82 12.62a24 24 0 0 1-33.68 4.21L224 287.65V152a24 24 0 0 1 24-24h16a24 24 0 0 1 24 24z"
            class="text-[#f5a831]"
          ></path>
        </g>
      </svg>
    </div>
    <div
      class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff]"
    >
      <h1 class="text-lg font-normal text-[#545c63]">Fund Your Wallet</h1>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fad"
        data-icon="wallet"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="w-14"
      >
        <g class="fa-group">
          <path
            fill="currentColor"
            d="M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
            class="text-[#c7eed0]"
          ></path>
          <path
            fill="currentColor"
            d="M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
            class="text-[#66cc66]"
          ></path>
        </g>
      </svg>
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
