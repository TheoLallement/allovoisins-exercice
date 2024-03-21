<template>
  <div role="button" @click="handleClick">
    {{ props.article.title }}
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
