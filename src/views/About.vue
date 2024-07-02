<template>
  <div class="flex h-fit">
    <div class="lg:w-[20%]">
      <BusinessDashBoardAside class="hidden lg:flex" />
    </div>

    <div class="w-full lg:w-4/5">
      <div>
        <BusinessDashBoardHeader />
      </div>
      <div class="bg-[#edeef7] p-5">
        <div class="flex flex-col rounded-xl bg-[#ffffff] p-6">
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
