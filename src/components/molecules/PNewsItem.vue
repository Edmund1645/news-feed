<template>
  <article class="mb-5 border border-secondary rounded p-3">
    <router-link :to="`/post/${news.id}`" class="d-inline-block mb-3">
      {{ news.title }}
    </router-link>
    <p>
      Author: <strong>{{ news.author }}</strong>
    </p>
    <p class="mb-0">{{ truncatedBody }}</p>
  </article>
</template>

<script>
export default {
  name: "PNewsItem",
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  computed: {
    truncatedBody() {
      return this.news.body.slice(0, 90) + "...";
    },
  },
};
</script>

<style lang="scss" scoped></style>
