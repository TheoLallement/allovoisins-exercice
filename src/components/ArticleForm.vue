<template>
  <div class="article-form">
    <form
      class="article-form--form-container"
      @submit.prevent="saveArticle"
      @reset.prevent="cancelModification"
    >
      <h2 v-if="isModifyMode">Modification de {{ articleRef.title }}</h2>
      <h2 v-else>Ajout d'un article</h2>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="articleRef.title" required />

      <label for="price">Price:</label>
      <input type="number" id="price" v-model="articleRef.price" required />

      <label for="tva">TVA:</label>
      <input type="number" id="tva" v-model="articleRef.tva" required />

      <div class="article-form--buttons-container">
        <button type="submit">Save</button>
        <button type="reset">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import type { Article } from '@/types/Article.types.ts'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true
  }
})

const emits = defineEmits(['saveArticle', 'cancelModification'])

const articleRef = computed(() => props.article)

const isModifyMode = computed(() => articleRef.value.id)

function saveArticle() {
  console.log('Article saved:', articleRef)
  emits('saveArticle', articleRef.value)
}

function cancelModification() {
  emits('cancelModification')
}
</script>

<style scoped scss>
.article-form {
  display: block;
  padding: 1rem;
  background-color: white;
  border-radius: 16px;
}

.article-form--form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-form--buttons-container {
  display: flex;
  flex-direction: row;
  gap: var(--primary-padding);
}
</style>
