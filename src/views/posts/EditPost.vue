<template>
  <h1>Edit post</h1>
  <p-form :newsData="newsItem" @submit-news="handleSubmit" />
</template>

<script>
import PForm from "organisms/PForm.vue";

import { mapGetters, mapMutations } from "vuex";
export default {
  name: "EditPost",
  components: {
    PForm,
  },
  computed: {
    ...mapGetters(["newsItemById"]),
    newsItem() {
      return this.newsItemById(this.$route.params.id);
    },
  },
  methods: {
    ...mapMutations(["updateNewsItem"]),
    handleSubmit(newsData) {
      this.updateNewsItem(newsData);
      this.$router.push(`/post/${this.newsItem.id}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
