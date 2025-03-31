<template>
    <h2 class="title">{{ propTitulo }}</h2>
  </template>
  
  <script>
  export default {
    // Declaracion del prop llamado
    props: {
      propTitulo: {
        type: String,
        required: true // Indica que este prop es obligatorio
      }
    }
  }
  </script>
  
  <style scoped>
  .title {
    color: blue;
    font-size: 24px;
    text-align: center;
  }
  </style>
  