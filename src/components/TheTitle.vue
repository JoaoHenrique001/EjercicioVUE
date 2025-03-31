<template>
    <h2 class="title">
      <slot></slot>
    </h2>
  </template>
  
  <script>
  export default {
    name: 'TheTitle'
  }
  </script>
  
  <style scoped>
  .title {
    color: blue;
    font-size: 24px;
    text-align: center;
  }
  </style>
  