<template>
  <div class="flex  h-screen">
    <div class="lg:w-[20%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>

    <div class="w-full lg:w-4/5">
      <div>
        <BusinessDashBoardHeader Heading="About"/>
      </div>
      <div class="flex flex-col bg-[#edeef7] p-5">
        <div
          class="flex items-center justify-end gap-1 text-[#8f8f8f] lg:hidden"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="book-open"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="w-4"
          >
            <g class="fa-group">
              <path
                fill="currentColor"
                d="M576 62.75v337.84c0 16.23-13.13 29.77-30 30.66-49.47 2.6-149.52 12.1-218.7 46.92-10.65 5.36-23.28-1.94-23.28-13.49V100.81a15.37 15.37 0 0 1 7.27-13.17c67.24-41.16 176.16-52.48 231-55.59C560.64 31 576 45 576 62.75z"
                class="text-[#a7aab0]"
              ></path>
              <path
                fill="currentColor"
                d="M264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31 0 45 0 62.75V400.6c0 16.24 13.13 29.78 30 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63a15.05 15.05 0 0 0-7.25-12.99z"
                class="text-[#6f7071]"
              ></path>
            </g>
          </svg>
          <h1>About</h1>
        </div>
        <div class="flex flex-col rounded-xl bg-[#ffffff] p-6 mt-2">
          <h1 class="text-lg">We are Greensex!</h1>
          <p class="mt-10 text-sm font-thin leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eveniet blanditiis quisquam nobis omnis ex pariatur reprehenderit
            quam rem, accusamus qui? Perferendis beatae mollitia numquam ratione
            consequatur quos voluptates quasi. quam rem, accusamus qui?
            Perferendis beatae mollitia numquam ratione consequatur quos
            voluptates quasi.
          </p>
          <p class="mt-10 text-sm font-thin leading-6">
            quam rem, accusamus qui? Perferendis beatae mollitia numquam ratione
            consequatur quos voluptates quasi. quam rem, accusamus qui?
            Perferendis beatae mollitia numquam ratione consequatur quos
            voluptates quasi. voluptates quasi.
          </p>

          <h1 class="mt-14 text-xl">Our values!</h1>
          <ul
            class="flex list-disc flex-col gap-4 px-10 pb-10 font-semibold lg:px-20"
          >
            <li class="mt-6">Accountability</li>
            <li>Responsiveness</li>
            <li>Trust</li>
            <li>Positive impact</li>
            <li>Upholding the highest ethical standards</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BusinessDashBoardAside from "@/components/BusinessDashBoardAside.vue";
import BusinessDashBoardHeader from "@/components/BusinessDashBoardHeader.vue";
import DashBoardCards from "@/components/DashBoardCards.vue";
import Input from "@/components/ui/input/Input.vue";
import { Button } from "@/components/ui/button";

export default {
  name: "Test",
  components: {
    BusinessDashBoardAside,
    BusinessDashBoardHeader,
    DashBoardCards,
    Input,
    Button,
  },
};
</script>
