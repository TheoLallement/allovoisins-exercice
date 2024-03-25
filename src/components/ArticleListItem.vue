<template>
  <div
    class="article-list-item"
    role="button"
    tabindex="0"
    @keypress="handleClick"
    @click="handleClick"
  >
    <span class="article-list-item--title">{{ props.article.title }}</span>
    <span class="article-list-item--icon">></span>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'
import type { Article } from '@/types/Article.types'

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['selectArticle'])

function handleClick() {
  emits('selectArticle', props.article)
}
</script>

<style scoped lang="scss">
.article-list-item {
  width: 100%;
  display: flex;
  padding: var(--primary-padding) 0;

  &:hover {
    cursor: pointer;
    background-color: var(--gray-2);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--gray-3); /* or any other border style */
  }

  &:focus-visible {
    outline: var(--main-gray) solid 2px;
  }
}

.article-list-item--title {
  flex-grow: 1;
  padding-left: var(--primary-padding);
}

.article-list-item--icon {
  font-size: 1rem;
  margin-right: var(--primary-padding);
}
</style>
