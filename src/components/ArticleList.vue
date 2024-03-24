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

<style scoped lang="scss">
.article-list {
  display: block;
  padding: 1rem;
  background-color: white;
  border-radius: 16px;
}

.article-list--items {
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
}

.article-list--title {
  margin-bottom: 1rem;
}
</style>
