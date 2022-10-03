<template>
  <main>
    <form @submit.prevent data-cy="news-form">
      <p-form-field
        id="title"
        type="text"
        label="Title"
        v-model:value="news.title"
        data-cy="news-title" />

      <p-form-field
        id="author"
        type="text"
        label="Author"
        v-model:value="news.author"
        data-cy="news-author" />

      <p-label label-for="body">Body</p-label>
      <p-text-area
        id="body"
        v-model:value="news.body"
        data-cy="news-body"></p-text-area>

      <div class="d-grid mt-5">
        <p-button @click="handleSubmit" data-cy="submit-post"
          >Submit post</p-button
        >
      </div>
    </form>
  </main>
</template>

<script>
import PFormField from "molecules/PFormField.vue";
import PButton from "atoms/PButton.vue";
import PLabel from "atoms/PLabel.vue";
import PTextArea from "atoms/PTextArea.vue";

export default {
  name: "PForm",
  emits: ["submit-news"],
  data() {
    return {
      news: {
        title: "",
        author: "",
        body: "",
      },
    };
  },
  props: {
    newsData: {
      type: Object,
      default: () => ({
        title: "",
        author: "",
        body: "",
      }),
    },
  },
  components: {
    PFormField,
    PButton,
    PLabel,
    PTextArea,
  },
  methods: {
    handleSubmit() {
      this.$emit("submit-news", this.news);
    },
  },
  mounted() {
    this.news = { ...this.newsData };
  },
};
</script>

<style lang="scss" scoped></style>
