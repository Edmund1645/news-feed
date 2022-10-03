<template>
  <main>
    <h1 class="text-center" data-cy="post-title">{{ newsItem.title }}</h1>
    <p class="text-center" data-cy="post-author">
      By: <strong>{{ newsItem.author }}</strong>
    </p>

    <router-link
      :to="`/post/${newsItem.id}/edit`"
      class="text-center d-block"
      data-cy="edit-post">
      edit
    </router-link>

    <p class="mt-5">{{ newsItem.body }}</p>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PostDetails",
  computed: {
    ...mapGetters(["newsItemById"]),
    newsItem() {
      return this.newsItemById(this.$route.params.id);
    },
  },
  created() {
    if (!this.newsItem.title) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped></style>
