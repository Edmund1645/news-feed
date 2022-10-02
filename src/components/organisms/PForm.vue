<template>
  <main>
    <form @submit.prevent>
      <p-form-field
        type="text"
        id="title"
        label="Title"
        v-model:value="title" />

      <p-form-field
        type="text"
        id="author"
        label="Author"
        v-model:value="author" />

      <p-label label-for="body">Body</p-label>
      <p-text-area id="body" v-model:value="body"></p-text-area>

      <div class="d-grid mt-5">
        <p-button @click="handleSubmit">Submit post</p-button>
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
  data() {
    return {
      title: "s",
      author: "George R.R Martin",
      body: "Twas a cold and stormy night",
    };
  },
  components: {
    PFormField,
    PButton,
    PLabel,
    PTextArea,
  },
  methods: {
    handleSubmit() {
      console.log(this.title, this.author, this.body);
    },
  },
};
</script>

<style lang="scss" scoped></style>
