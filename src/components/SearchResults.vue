<template>
  <ul
    v-if="results.length > 0"
    class="cards"
  >
    <div class="cards__clear-container">
      <span class="cards__clear" @click="clearResults">Clear all</span>
    </div>
    <li
      v-for="(result, index) in results"
      :key="index"
      class="card"
    >
      <div class="card__image-container">
        <img class="card__image" :src="result.image" :alt="result.title" />
        <a :href="result.link" class="card__link" target="_blank">View</a>
      </div>
      <span class="card__description">
        <span class="card__title">{{ result.title }}</span>
        <span v-if="result.subtitle" class="card__subtitle">{{ result.subtitle }}</span>
        <span class="card__authors">
          <span
            class="card__author"
            v-for="(author, index) in result.authors"
            :key="index"
          >
            {{ `${author}${result.authors.length > index + 1 ? ', ' : ''}` }}
          </span>
        </span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    clearResults() {
      this.$emit('clear-results');
    },
  },
};
</script>
