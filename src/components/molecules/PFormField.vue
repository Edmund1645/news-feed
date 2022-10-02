<template>
  <div class="mb-3">
    <p-label :labelFor="id">{{ label }}</p-label>
    <p-input
      :id="id"
      :inputType="type"
      :value="value"
      @update:value="handleInput" />
  </div>
</template>

<script>
import PLabel from "../atoms/PLabel.vue";
import PInput from "../atoms/PInput.vue";
export default {
  name: "PFormField",
  emits: ["update:value"],
  components: {
    PLabel,
    PInput,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: String,
    value: String,
  },
  methods: {
    handleInput(newValue) {
      this.$emit("update:value", newValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
