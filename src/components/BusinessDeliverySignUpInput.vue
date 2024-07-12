<template>
  <div class="relative mt-7 w-full">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="rounded-lg border border-black py-3 px-2 w-[100%]"
    />
    <label class="absolute bottom-10 left-5 bg-white px-2">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "BusinessDeliverySignUpInput",
  props: {
    label: String,
    type: String,
    placeholder: String,
    modelValue: String
  }
};
</script>

<style scoped></style>
