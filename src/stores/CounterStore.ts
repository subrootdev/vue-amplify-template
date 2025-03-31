import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)

  // actions
  function increment() {
    count.value++
  }

  function reset() {
    count.value = 0
  }

  return {
    count,
    increment,
    reset,
  }
})

