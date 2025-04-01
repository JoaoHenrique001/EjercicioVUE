<template>
  <div id="app">
    <TheCounter />
    <ParentComponent />
    <router-view></router-view>
  </div>
</template>

<script lang="js">
import ParentComponent from './ParentComponent.vue'

export default {
  name: 'App',
  components: {
    ParentComponent, // Asegúrate de importar y registrar el componente aquí
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
