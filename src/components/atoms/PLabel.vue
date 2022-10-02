<template>
  <label :for="labelFor" class="form-label">
    <slot />
  </label>
</template>

<script>
export default {
  name: "PLabel",
  props: { labelFor: String },
};
</script>

<style lang="scss" scoped></style>
