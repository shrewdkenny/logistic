<template>
  <div
    class="grid cursor-pointer grid-cols-1 gap-4 px-3 py-2 lg:grid-cols-2 lg:px-28 lg:py-5"
  >
    <div class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden">
      <div>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="chart-pie"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 544 512"
          class="w-4"
        >
          <g class="fa-group">
            <path
              fill="currentColor"
              d="M379.86 443.87c6.85 6.85 6.33 18.48-1.57 24.08A238.14 238.14 0 0 1 243 512C114.83 513.59 4.5 408.51.14 280.37-4.1 155.6 87 51.49 206.16 34.65c9.45-1.34 17.84 6.51 17.84 16.06V288z"
              class="text-[#b2b2b4]"
            ></path>
            <path
              fill="currentColor"
              d="M512 223.2C503.72 103.74 408.26 8.28 288.8 0 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.23-16.8zm15.79 64.8H290.5l158 158c6 6 16 6.53 22.19.68a239.5 239.5 0 0 0 73.13-140.86c1.37-9.43-6.48-17.82-16.03-17.82z"
              class="text-[#8b8b8b]"
            ></path>
          </g>
        </svg>
      </div>
      <h1>Welcome</h1>
    </div>
    <router-link to="/new-dispatch">
      <div
        class="flex flex-col items-center justify-center rounded-lg bg-[#ffffff] py-7 hover:scale-105 hover:bg-[#fafafa] hover:transition-transform hover:duration-300 hover:ease-in-out lg:h-40 lg:py-0"
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

    <router-link to="/pending-orders">
      <div
        class="flex flex-col items-center justify-center rounded-lg bg-[#ffffff] py-7 hover:scale-105 hover:bg-[#fafafa] hover:transition-transform hover:duration-300 hover:ease-in-out lg:h-40 lg:py-0"
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
        </svg></div
    ></router-link>

    <router-link to="/order-history">
      <div
        class="flex flex-col items-center justify-center rounded-lg bg-[#ffffff] py-7 hover:scale-105 hover:bg-[#fafafa] hover:transition-transform hover:duration-300 hover:ease-in-out lg:h-40 lg:py-0"
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
        </svg></div
    ></router-link>

    <router-link to="/fund-wallet">
      <div
        class="flex h-40 flex-col items-center justify-center rounded-lg bg-[#ffffff] hover:scale-105 hover:bg-[#fafafa] hover:transition-transform hover:duration-300 hover:ease-in-out"
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
        </svg></div
    ></router-link>
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
