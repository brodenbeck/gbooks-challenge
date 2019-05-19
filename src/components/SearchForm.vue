<template>
  <form class="search-form" @submit.prevent="search">
    <input class="search-form__input m-right-10" type="text" v-model="query" />
    <button
      :class="{
        'search-form__button': true,
        button: true,
        'button--loading': isLoading,
      }"
      type="submit"
    >
      <img src="../assets/images/search.png" alt="Search books" />
    </button>
  </form>
</template>

<script>
import Volume from '../services/Volume';

export default {
  name: 'SearchForm',
  data() {
    return {
      query: '',
      isLoading: false,
    };
  },
  methods: {
    search() {
      this.isLoading = true;
      Volume.index(this.query, this.successCB, this.errorCB);
    },
    successCB(volumes) {
      this.$emit('get-results-success', volumes);
      this.isLoading = false;
    },
    errorCB(error) {
      this.$emit('get-results-failure', error);
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
}

.search-form__input {
  flex: 1;
}
</style>
