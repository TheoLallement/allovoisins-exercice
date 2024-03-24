<template>
  <div class="articles-view">
    <article-list class="article-view--article-list" title="Articles">
      <article-list-item
        v-for="article in articles"
        :selected="article === formArticle"
        :key="article.id"
        :article="article"
        @select-article="formArticle = $event"
      />
    </article-list>
    <article-form
      class="article-view--article-form"
      :article="formArticle"
      @save-article="handleSaveArticle"
      @cancel-modification="resetFormArticle"
    />
  </div>
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

<style scoped lang="scss">
.articles-view {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  gap: 2rem;
  width: 100%;
}

.article-view--article-list {
  flex: 1;
  max-width: calc(70% - var(--primary-padding));
}

.article-view--article-form {
  flex: 1;
  max-width: calc(30% - var(--primary-padding));
  height: fit-content;
  position: sticky;
  top: 16px;
}
</style>
