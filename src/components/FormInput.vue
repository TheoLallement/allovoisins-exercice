<template>
  <div class="form-input--container">
    <input
      class="form-input--input"
      :type="props.type"
      :id="props.id"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      required
    />
    <label class="form-input--label" :for="props.id">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = defineModel()
</script>

<style scoped lang="scss">
.form-input--container {
  position: relative;
}

.form-input--label {
  position: absolute;
  top: 0%;
  left: 10px;
  transform: translateY(-50%);
  background-color: white;
  padding: 0 5px;
}

.form-input--input {
  padding: 10px;
  border: 1px solid var(--main-gray);
  width: 100%;
  box-sizing: border-box;
}
</style>
