<template>
  <div class="articles-view">
    <article-list title="Articles">
      <article-list-item
        v-for="article in articles"
        :selected="article === formArticle"
        :key="article.id"
        :article="article"
        @select-article="formArticle = $event"
      />
    </article-list>
    <article-form
      :article="formArticle"
      @save-article="handleSaveArticle"
      @cancel-modification="resetFormArticle"
    />
  </div>
  {{ formArticle }}
  {{ ArticleDefault }}
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ArticleList from '@/components/ArticleList.vue'
import ArticleListItem from '@/components/ArticleListItem.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import { type Article, ArticleDefault } from '@/types/Article.types'

const articles: Ref<Array<Article>> = ref([
  { title: 'Article 1', price: 20, tva: 20, id: '1' },
  { title: 'Article 2', price: 30, tva: 20, id: '2' }
])

// need to destructure to not modify the original value
const formArticle = ref<Article>({ ...ArticleDefault })

function handleSaveArticle(article: Article) {
  if (!article.id) {
    // Add id to the article to used as a key in v-for and prevent bug is two articles have same title
    article.id = String(articles.value.length + 1)
    articles.value.push(article)
  } else {
    var itemToUpdateIndex = articles.value.findIndex((x) => x.id === article.id)
    articles.value[itemToUpdateIndex] = article
  }
  resetFormArticle()
}

function resetFormArticle() {
  // need to destructure to not modify original object
  formArticle.value = { ...ArticleDefault }
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
