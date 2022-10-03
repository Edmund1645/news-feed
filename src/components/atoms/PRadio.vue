<template>
  <input
    type="radio"
    class="form-check-input"
    :checked="isChecked"
    :value="value"
    @change="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  name: "PRadio",
  emits: ["update:modelValue"],
  props: {
    value: {
      type: String,
      required: true,
    },
    modelValue: String,
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
