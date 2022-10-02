<template>
  <textarea
    :id="id"
    class="form-control"
    rows="10"
    :value="value"
    @input="$emit('update:value', $event.target.value)"></textarea>
</template>

<script>
export default {
  name: "PTextArea",
  emits: ["update:value"],
  props: {
    id: {
      type: String,
      required: true,
    },
    value: String,
  },
};
</script>

<style lang="scss" scoped></style>
