<template>
  <button type="button" @click="$emit('click')" class="btn btn-primary">
    <slot />
  </button>
</template>

<script>
export default {
  name: "PButton",
  emits: ["click"],
};
</script>

<style lang="scss" scoped></style>
