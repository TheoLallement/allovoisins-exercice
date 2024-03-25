<template>
  <div class="article-form">
    <form
      class="article-form--form-container"
      @submit.prevent="saveArticle"
      @reset.prevent="cancelModification"
    >
      <h3 v-if="isModifyMode">Modification de {{ articleRef.title }}</h3>
      <h3 v-else>Ajout d'un article</h3>
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="articleRef.title" required />

      <label for="price">Price:</label>
      <input type="number" id="price" v-model="articleRef.price" required />

      <label for="tva">TVA:</label>
      <input type="number" id="tva" v-model="articleRef.tva" required />

      <button type="submit">Save</button>
      <button type="reset">Annuler</button>
    </form>
    {{ isModifyMode }}
    {{ articleRef }}
    {{ props.article }}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, reactive, toRef, type Ref, type PropType } from 'vue'
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
