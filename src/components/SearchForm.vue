<template>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button
      :class="{
        button: true,
        'button--loading': isLoading,
      }"
      type="submit"
    >
      Search
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
