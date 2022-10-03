<template>
  <div class="mb-4 row">
    <div class="col-12 col-md-6 mb-3 mb-md-0">
      <p-input v-model:value="search.term" placeholder="Search..."></p-input>
    </div>

    <div class="col-6 col-md-3 dropdown-center">
      <p-button class="btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
        Search by...
      </p-button>

      <div class="dropdown-menu dropdown-menu-dark">
        <form @submit.prevent class="px-3">
          <div class="form-check">
            <p-radio
              id="search-title"
              value="title"
              v-model="search.key"
              name="search-key" />
            <p-label label-for="search-title" class="form-check-label">
              Title
            </p-label>
          </div>

          <div class="form-check">
            <p-radio
              id="search-author"
              value="author"
              v-model="search.key"
              name="search-key" />
            <p-label label-for="search-author" class="form-check-label">
              Author
            </p-label>
          </div>

          <div class="form-check">
            <p-radio
              id="search-body"
              value="body"
              v-model="search.key"
              name="search-key" />
            <p-label label-for="search-body" class="form-check-label">
              Body
            </p-label>
          </div>
        </form>
      </div>
    </div>

    <div class="col-6 col-md-3 dropdown-center">
      <p-button class="btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
        Sort by...
      </p-button>

      <div class="dropdown-menu dropdown-menu-dark">
        <form @submit.prevent class="px-3">
          <div class="form-check">
            <p-radio
              id="order-asc"
              value="asc"
              v-model="search.order"
              name="search-order" />
            <p-label label-for="order-asc" class="form-check-label">
              Ascending
            </p-label>
          </div>

          <div class="form-check">
            <p-radio
              id="order-desc"
              value="desc"
              v-model="search.order"
              name="search-order" />
            <p-label label-for="order-desc" class="form-check-label">
              Descending
            </p-label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PRadio from "atoms/PRadio.vue";
import PLabel from "atoms/PLabel.vue";
import PButton from "atoms/PButton.vue";
import PInput from "atoms/PInput.vue";

export default {
  name: "PSearch",
  emits: ["update:search"],
  data() {
    return {
      search: {
        term: "",
        key: "title",
        order: "",
      },
    };
  },
  watch: {
    search: {
      handler(newValue) {
        this.$emit("update:search", newValue);
      },
      deep: true,
    },
  },
  components: {
    PRadio,
    PLabel,
    PButton,
    PInput,
  },
  mounted() {
    // set default search criteria
    this.$emit("update:search", this.search);
  },
};
</script>

<style lang="scss" scoped></style>
