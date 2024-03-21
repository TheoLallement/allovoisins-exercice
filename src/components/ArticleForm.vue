<template>
  <div class="article-form">
    <form class="article-form--form-container" @submit.prevent="saveArticle">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="article.title" required />

      <label for="price">Price:</label>
      <input type="number" id="price" v-model="article.price" required />

      <label for="tva">TVA:</label>
      <input type="number" id="tva" v-model="article.tva" required></input>

      <button type="submit">Save</button>
    </form>
    {{ article }}
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import type { Article } from '@/types/Article.types.ts'

const emits = defineEmits(['saveArticle'])

const article: Ref<Array<Article>> = ref({
  title: '',
  price: '',
  tva: ''
} as Article)

function saveArticle(): Article {
  // Add your save logic here
  console.log('Article saved:', article.value)
  emits('saveArticle', article.value)
}
</script>

<style scoped scss>
.article-form {
  width: 100%;
  display: block;
  padding: 1rem;
  background-color: grey;
  border-radius: 16px;
}

.article-form--form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
