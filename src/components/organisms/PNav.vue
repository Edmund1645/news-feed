<template>
  <nav class="navbar py-5">
    <div class="container-p d-flex justify-content-between">
      <p class="navbar-brand h1 text-bg-dark">Posty</p>
      <div>
        <router-link to="/" class="btn btn-link" active-class="text-light">
          Feed
        </router-link>
        <router-link
          to="/explore"
          class="btn btn-link"
          active-class="text-light">
          Explore
        </router-link>
        <router-link
          to="/profile"
          class="btn btn-link"
          active-class="text-light">
          Profile
        </router-link>
      </div>
      <p-button @click="$router.push('/post/new')">New Post</p-button>
    </div>
  </nav>
</template>

<script>
import PButton from "atoms/PButton.vue";
export default {
  name: "PNav",
  components: {
    PButton,
  },
};
</script>

<style lang="scss" scoped></style>
