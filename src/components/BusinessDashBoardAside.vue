<template>
  <div class="flex h-[100%] cursor-pointer flex-col bg-[#022045]">
    <router-link to="/">
      <div class="px-10">
        <img
          src="@/assets/images/greensexlogo2.svg"
          alt=""
          class="mt-10 w-[150px]"
        />
      </div>
    </router-link>
    <AsideLinks />
  </div>
</template>

<script>
import AsideLinks from "@/components/AsideLinks.vue";
export default {
  name: "Test",
  components: {
    AsideLinks,
  },
};
</script>

<style lang="scss" scoped></style>
