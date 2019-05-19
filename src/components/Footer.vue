<template>
  <footer class="background-lighter-gray">
    <div class="wrapper">
      <p class="text-center is-marginless">
        This application utilizes the
        <a href="https://developers.google.com/books/docs/overview" target="_blank">Google Books API</a>.
        Visit
        <a href="https://books.google.com/" target="_blank">Google Books</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style scoped>
footer {
  padding: 20px 0;
}
a {
  color: var(--google-blue);
  font-weight: bold;
  padding-bottom: 5px;
  position: relative;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

a:after {
  background: var(--google-green);
  bottom: 0;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  transition: 0.3s ease-in-out;
  width: 0;
}

a:hover {
  color: var(--google-green);
}

a:hover:after {
  width: 100%;
}
</style>
