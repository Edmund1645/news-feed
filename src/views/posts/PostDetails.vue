<template>
  <main>
    <h1 class="text-center">{{ newsItem.title }}</h1>
    <p class="text-center">
      By: <strong>{{ newsItem.author }}</strong>
    </p>

    <router-link :to="`/post/${newsItem.id}/edit`" class="text-center d-block">
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
