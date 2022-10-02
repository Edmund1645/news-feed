<template>
  <h1 class="mb-5">Your news feed</h1>
  <p-news-item v-for="news in allNews" :key="news.id" :news="news" />
</template>

<script>
import PNewsItem from "molecules/PNewsItem.vue";

import { mapGetters } from "vuex";
export default {
  name: "HomePage",
  components: {
    PNewsItem,
  },
  computed: {
    ...mapGetters(["allNews"]),
  },
};
</script>

<style lang="scss" scoped></style>
