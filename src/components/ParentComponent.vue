<template>
  <div>
    <h2>Componente Padre</h2>
    <p>{{ mensaje }}</p>
    <ChildComponent @saludarPadre="recibirSaludo" />
  </div>
</template>

<script lang="js">
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  data() {
    return {
      mensaje: 'Esperando saludo...',
    }
  },
  methods: {
    recibirSaludo(mensajeRecibido) {
      this.mensaje = mensajeRecibido
    },
  },
}
</script>
