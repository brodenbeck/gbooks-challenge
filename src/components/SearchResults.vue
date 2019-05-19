<template>
  <ul
    v-if="results.length > 0"
    class="results"
  >
    <span @click="clearResults">Clear all</span>
    <a
      v-for="(result, index) in results"
      :key="index"
      :href="result.link"
    >
      <li>
        <img :src="result.image" :alt="result.title" />
        Title: {{ result.title }}
        <span v-if="result.subtitle">Subtitle: {{ result.subtitle }}</span>
        Authors:
        <span
          v-for="(author, index) in result.authors"
          :key="index"
        >
          {{ `${author}${result.authors.length > index + 1 ? ', ' : ''}` }}
        </span>
      </li>
    </a>
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
