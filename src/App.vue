<template>
  <div class="page">
    <div class="main-content">
      <div class="wrapper">
        <app-header></app-header>
        <main>
          <search-form
            @get-results-failure="displayError"
            @get-results-success="displayResults"
          />
          <p v-if="error">
            Sorry, there was an error with your request:
            <span>{{ error }}</span>
          </p>
          <p v-if="noResults">Sorry, there are no books matching your search.</p>
          <search-results
            @clear-results="clearResults"
            :results="results"
          />
        </main>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import SearchResults from './components/SearchResults.vue';
import SearchForm from './components/SearchForm.vue';

export default {
  name: 'GoogleBooksApp',
  data() {
    return {
      error: '',
      noResults: false,
      results: [],
      resultIds: [],
    };
  },
  components: {
    'app-footer': Footer,
    'app-header': Header,
    'search-form': SearchForm,
    'search-results': SearchResults,
  },
  methods: {
    addVolumeToResults(result) {
      this.resultIds.push(result.id);
      this.results.unshift({
        title: result.volumeInfo.title,
        image: result.volumeInfo.imageLinks.thumbnail,
        subtitle: result.volumeInfo.subtitle || null,
        link: result.volumeInfo.previewLink,
        authors: result.volumeInfo.authors,
      });
    },
    clearResults() {
      this.results = [];
      this.resultIds = [];
    },
    displayResults(results) {
      if (results) {
        this.noResults = false;
        results.filter(result => !this.resultIds.includes(result.id))
          .map(result => this.addVolumeToResults(result));
      } else {
        this.noResults = true;
      }
    },
    displayError(error) {
      this.error = error;
    },
  },
};
</script>

<style>
@import url('./assets/styles/styles.css');
</style>
