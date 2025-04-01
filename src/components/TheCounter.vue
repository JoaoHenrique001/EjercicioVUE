<template>
  <div class="counter">
    <!-- Usamos el componente TheTitle.vue para mostrar el título -->
    <TheTitle> Contador </TheTitle>

    <div class="counter-display">
      <!-- Mostrar el valor del contador -->
      <p>Contador: {{ counter }}</p>
    </div>

    <div class="counter-buttons">
      <!-- Botón para incrementar -->
      <button v-if="counter < 10" @click="increment">Incrementar</button>
      <!-- Botón para decrementar -->
      <button v-if="counter > 0" @click="decrement">Decrementar</button>
    </div>
  </div>
</template>

<script>
import { useCounter } from '../useCounter.ts' // Importamos el composable
import TheTitle from './TheTitle.vue'

export default {
  name: 'TheCounter',
  components: {
    TheTitle,  // Solo registramos TheTitle
  },
  setup() {
    // Usamos el composable para obtener el contador y métodos
    const { counter, increment, decrement } = useCounter()

    return {
      counter,
      increment,
      decrement,
    }
  }
}
</script>

<style scoped>
.counter {
  text-align: center;
  margin-top: 20px;
}

.counter-buttons button {
  margin: 10px;
  padding: 10px;
  background-color: #33e7ff;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.counter-buttons button:hover {
  background-color: #1c91b1;
}

.counter-display {
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
}
</style>
