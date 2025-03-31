<template>
  <div>
    <button @click="enviarSaludo">Saludar al Padre</button>
  </div>
</template>

<script lang="js">
export default {
  name: 'ChildComponent',
  methods: {
    enviarSaludo() {
      this.$emit('saludarPadre', 'Hola desde el componente hijo 👋')
    },
  },
}
</script>
