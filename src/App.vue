<script setup lang="ts">
import ArticlesView from './views/ArticlesView.vue'
</script>

<template>
  <h2>
    Retrouver le README.md avec le résumé du déroulé de l'exercice
    <a
      target="_blank"
      href="https://github.com/TheoLallement/allovoisins-exercice/blob/main/README.md"
      >ici</a
    >
  </h2>
  <ArticlesView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
