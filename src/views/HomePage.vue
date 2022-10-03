<template>
  <h1 class="mb-5">Your news feed</h1>
  <p-search @update:search="handleSearchUpdate" />
  <p-news-item v-for="news in newsResult" :key="news.id" :news="news" />
</template>

<script>
import PNewsItem from "molecules/PNewsItem.vue";
import PSearch from "organisms/PSearch.vue";

import { mapGetters } from "vuex";
import Fuse from "fuse.js";

import compareStrings from "utils/compare-strings.js";

export default {
  name: "HomePage",
  components: {
    PNewsItem,
    PSearch,
  },
  data() {
    return {
      newsResult: [],
      searchCriteria: {
        term: "",
        key: "",
        order: "",
      },
    };
  },
  computed: {
    ...mapGetters(["allNews"]),
  },
  methods: {
    handleSearchUpdate(searchCriteria) {
      this.searchCriteria = searchCriteria;
      this.loadFuse();
      this.performSearch();
    },
    loadFuse() {
      const options = {
        keys: [this.searchCriteria.key],
        threshold: 0.4,
      };
      this.fuse = new Fuse(this.allNews, options);
    },
    performSearch() {
      if (!this.searchCriteria.term) {
        this.newsResult = this.allNews;
        return;
      }
      const searchResult = this.fuse.search(this.searchCriteria.term);
      const normalizedResult = searchResult.map((result) => result.item);
      if (this.searchCriteria.order) {
        // sort based on selected key (title, author or body)
        normalizedResult.sort((a, b) => {
          if (this.searchCriteria.order === "asc") {
            return compareStrings(
              a[this.searchCriteria.key],
              b[this.searchCriteria.key]
            );
          } else {
            const position = compareStrings(
              a[this.searchCriteria.key],
              b[this.searchCriteria.key]
            );
            return position === 0 ? position : position * -1; // reverse position for descending order
          }
        });
      }

      this.newsResult = normalizedResult;
    },
  },
};
</script>

<style lang="scss" scoped></style>
