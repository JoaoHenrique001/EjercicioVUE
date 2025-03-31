<template>
  <div id="app">
    <TheCounter />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import TheCounter from '../components/TheCounter.vue'
import ParentComponent from '../components/ParentComponent.vue'

export default {
  name: 'App',
  components: {
    TheCounter,
    ParentComponent,
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
