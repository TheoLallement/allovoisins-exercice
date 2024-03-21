<template>
  <div class="articles-view">
    <article-list title="Articles">
      <article-list-item
        v-for="article in articles"
        :selected="article === selectedArticle"
        :key="article.id"
        :article="article"
        @select-article="selectedArticle = $event"
      />
    </article-list>
    <article-form @save-article="handleSaveArticle" />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ArticleList from '@/components/ArticleList.vue'
import ArticleListItem from '@/components/ArticleListItem.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import type { Article } from '@/types/Article.types'

const articles: Ref<Array<Article>> = ref([
  { title: 'Article 1', prix_unitaire: 20, tva: 20, id: '1' },
  { title: 'Article 2', prix_unitaire: 30, tva: 20, id: '2' }
])

const selectedArticle = ref<Article | null>(null)

function handleSaveArticle(article: Article) {
  // Add id to the article to used as a key in v-for and prevent bug is two articles have same title
  article.id = String(articles.value.length + 1)
  articles.value.push(article)
}
</script>

<style scoped scss>
.articles-view {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>
```
