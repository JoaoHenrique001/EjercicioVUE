<template>
  <div>
    <h2>Componente Padre</h2>
    <p>{{ mensaje }}</p>
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  data() {
    return {
      mensaje: 'Hola desde el componente padre 👋',
    }
  },
  provide() {
    return {
      // Proporcionar la variable al hijo
      mensajePadre: this.mensaje,
    }
  }
}
</script>
