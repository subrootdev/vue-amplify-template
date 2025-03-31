<template>
  <div class="text-center space-y-4">
    <h1 class="text-2xl font-bold">{{ msg }}</h1>
    <p class="text-lg text-gray-700">Count: {{ counter.count }}</p>
    <div class="space-x-2">
      <button @click="counter.increment" class="px-4 py-2 bg-blue-600 text-white rounded">
        Increment
      </button>
      <button @click="counter.reset" class="px-4 py-2 bg-gray-300 rounded">
        Reset
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/CounterStore'

defineProps<{ msg: string }>()

const counter = useCounterStore()
</script>
