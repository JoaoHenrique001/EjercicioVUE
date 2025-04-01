<template>
  <div>
    <h3>Componente Hijo</h3>
    <p>Mensaje recibido: {{ mensajePadre }}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  // Recibimos la variable proporcionada por el padre
  inject: ['mensajePadre'],
}
</script>
