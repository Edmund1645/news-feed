<template>
  <p-nav />
  <div class="container-p py-5">
    <router-view />
  </div>
</template>

<script>
import PNav from "@/components/organisms/PNav.vue";
export default {
  name: "App",
  components: {
    PNav,
  },
};
</script>

<style scoped></style>
