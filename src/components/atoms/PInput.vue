<template>
  <input
    :id="id"
    :type="inputType"
    :value="value"
    @input="$emit('update:value', $event.target.value)"
    class="form-control" />
</template>

<script>
export default {
  name: "PInput",
  emits: ["update:value"],
  props: {
    id: String,
    value: String,
    inputType: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style lang="scss" scoped></style>
