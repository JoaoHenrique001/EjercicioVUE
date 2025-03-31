<template>
  <div id="app">
    <!-- Incluir el componente TheCounter -->
    <TheCounter />
  </div>
</template>

<script>
import TheCounter from './components/TheCounter.vue';

export default {
  name: 'App',
  components: {
    TheCounter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
