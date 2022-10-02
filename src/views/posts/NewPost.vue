<template>
  <h1>Create new post</h1>
  <p-form @submit-news="handleSubmit" />
</template>

<script>
import PForm from "organisms/PForm.vue";

import { mapMutations } from "vuex";
export default {
  name: "NewPost",
  components: {
    PForm,
  },
  methods: {
    ...mapMutations(["createNewsItem"]),
    handleSubmit(newsData) {
      this.createNewsItem(newsData);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
