<template>
  <nav class="navbar py-5">
    <div class="container-p d-flex justify-content-between align-items-center">
      <p class="navbar-brand h1 text-bg-dark d-none d-md-block">Posty</p>
      <div class="d-flex align-items-center">
        <router-link
          to="/"
          class="btn btn-link btn-sm"
          active-class="text-light">
          Feed
        </router-link>
        <router-link
          to="/explore"
          class="btn btn-link btn-sm"
          active-class="text-light">
          Explore
        </router-link>
        <router-link
          to="/profile"
          class="btn btn-link btn-sm"
          active-class="text-light">
          Profile
        </router-link>
      </div>
      <p-button
        @click="$router.push('/post/new')"
        class="btn-sm"
        data-cy="new-post">
        New Post
      </p-button>
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
