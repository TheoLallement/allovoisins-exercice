<template>
  <div class="articles-view">
    <article-list class="article-view--article-list" title="Articles">
      <article-list-item
        v-for="article in articles"
        :selected="article === formArticle"
        :key="article.id"
        :article="article"
        @select-article="setSelectedArticle"
      />
    </article-list>
    <article-form
      v-if="!isMobile"
      class="article-view--article-form"
      :article="formArticle"
      @save-article="handleSaveArticle"
      @cancel-modification="resetFormArticle"
    />
    <dialog ref="dialog">
      <article-form
        class="article-view--article-form"
        :article="formArticle"
        @save-article="handleSaveArticle"
        @cancel-modification="resetFormArticle"
        style="max-width: 90%"
      />
    </dialog>
  </div>
  <button
    v-if="isMobile"
    @click="dialog?.showModal()"
    aria-label="Ouvre le formulaire"
    class="article-view--add-button-mobile"
  >
    +
  </button>
</template>

<script setup lang="ts">
import { ref, type Ref, computed } from 'vue'
import ArticleList from '@/components/ArticleList.vue'
import ArticleListItem from '@/components/ArticleListItem.vue'
import ArticleForm from '@/components/ArticleForm.vue'
import { type Article, ArticleDefault } from '@/types/Article.types'
import useBreakpoints from '@/composables/useBreakpoints'

const articles: Ref<Array<Article>> = ref([
  { title: 'Article 1', price: 20, tva: 20, id: '1' },
  { title: 'Article 2', price: 30, tva: 20, id: '2' }
])

// need to destructure to not modify the original value
const formArticle = ref<Article>({ ...ArticleDefault })

const dialog = ref<HTMLDialogElement>()

const currentBreakpoint = useBreakpoints().currentBreakpoint
const isMobile = computed(() => currentBreakpoint.value === 'xs')

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
  if (isMobile.value) dialog.value?.close()
}

function setSelectedArticle(article: Article) {
  formArticle.value = article
  if (isMobile.value) dialog.value?.showModal()
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
  flex-grow: 7;
}

.article-view--article-form {
  flex-grow: 2;
  height: fit-content;
  position: sticky;
  top: 16px;
}

.article-view--add-button-mobile {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 50%;
  font-size: 2rem;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: var(--primary-offre);
}
</style>
