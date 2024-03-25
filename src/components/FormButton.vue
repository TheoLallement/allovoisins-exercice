<template>
  <button class="form-button">{{ props.label }}</button>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  }
})
</script>

<style scoped lang="scss">
.form-button {
  padding: calc(var(--primary-padding) / 2);
  border-radius: 16px;
  width: 100%;
  color: white;
  background-color: var(--primary-offre);
  border: unset;

  &:hover {
    background-color: var(--primary-offre-darken);
  }

  &:focus-visible {
    outline: var(--primary-offre) solid 2px;
    outline-offset: 3px;
  }
}
</style>
