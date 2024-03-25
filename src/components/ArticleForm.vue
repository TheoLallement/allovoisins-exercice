<template>
  <div class="article-form">
    <form
      class="article-form--form-container"
      @submit.prevent="saveArticle"
      @reset.prevent="cancelModification"
    >
      <h2 v-if="isModifyMode">Modification de {{ articleRef.title }}</h2>
      <h2 v-else>Ajout d'un article</h2>

      <form-input id="title" label="Titre" v-model="articleRef.title" />

      <form-input type="number" id="price" label="Prix" v-model="articleRef.price" />

      <form-input type="number" id="tva" label="TVA" v-model="articleRef.tva" />

      <div class="article-form--total-ttc">Total TTC : {{ totalTTC }} €</div>

      <div class="article-form--buttons-container">
        <form-button type="submit" :label="submitButtonLabel" />
        <form-button type="reset" label="Annuler" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import FormInput from './FormInput.vue'
import FormButton from './FormButton.vue'
import type { Article } from '@/types/Article.types.ts'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true
  }
})

const emits = defineEmits(['saveArticle', 'cancelModification'])

const articleRef = computed(() => {
  return props.article
})

const isModifyMode = computed(() => articleRef.value.id)

const totalTTC = computed(() => {
  return String(articleRef.value.price * (1 + articleRef.value.tva / 100))
})

const submitButtonLabel = computed(() => {
  if (isModifyMode.value) return "Modifier l'article"
  return "Ajouter l'article"
})

function saveArticle() {
  emits('saveArticle', articleRef.value)
}

function cancelModification() {
  emits('cancelModification')
}
</script>

<style scoped lang="scss">
.article-form {
  display: block;
  padding: 1rem;
  background-color: white;
  border-radius: 16px;
}

.article-form--form-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-form--buttons-container {
  display: flex;
  flex-direction: row;
  gap: var(--primary-padding);
}

.article-form--total-ttc {
  font-size: 1.25rem;
}

.article-form--buttons-container {
  display: flex;
  flex-direction: row;
  gap: var(--primary-padding);
}
</style>
