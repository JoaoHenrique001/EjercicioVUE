<template>
  <div class="home">
    <TheTitle>Bienvenido a la Tienda</TheTitle>
    <TheCounter />
    <button @click="goCatalogo">Go to Catalog</button>
  </div>
</template>

<script>
import TheTitle from '@/components/TheTitle.vue'
import TheCounter from '@/components/TheCounter.vue'

export default {
  components: {
    TheTitle,
    TheCounter,
  },
  methods: {
    goCatalogo() {
      this.$router.push('/catalogo') // Redirige a la página de catalogo
    },
  },
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #33e7ff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #1c91b1;
}
</style>
