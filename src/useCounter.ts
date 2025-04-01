// src/composables/useCounter.js

import { ref } from 'vue'

export function useCounter() {
  // Estado del contador
  const counter = ref(0)

  // Método para incrementar el contador
  const increment = () => {
    if (counter.value < 10) {
      counter.value += 1
    }
  }

  // Método para decrementar el contador
  const decrement = () => {
    if (counter.value > 0) {
      counter.value -= 1
    }
  }

  // Retornar los valores y métodos que quieres usar
  return {
    counter,
    increment,
    decrement,
  }
}
