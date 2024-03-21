<template>
  <div class="article-list">
    <h2 class="article-list--title">{{ props.title }}</h2>
    <div class="article-list--items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped scss>
.article-list {
  width: 100%;
  display: block;
}

.article-list--items {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &:hover {
    cursor: pointer;
  }
}

.article-list--title {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
