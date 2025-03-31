<template>
    <div class="counter">
      <!-- Usamos el componente TheTitle.vue para mostrar el título -->
      <TheTitle>
        Contador
      </TheTitle>
      
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
  import TheTitle from './TheTitle.vue';
  
  export default {
    components: {
      TheTitle
    },
    data() {
      return {
        // Contador inicializado en 0
        counter: 0
      };
    },
    methods: {
      // Método para incrementar el contador
      increment() {
        this.counter += 1;
      },
      // Método para decrementar el contador
      decrement() {
        this.counter -= 1;
      }
    }
  };
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
  