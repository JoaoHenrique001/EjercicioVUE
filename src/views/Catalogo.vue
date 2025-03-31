<template>
  <div class="catalogo">
    <h1>Catalogo de Productos</h1>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.title"
        :image="product.image"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :button="product.button"
      />
    </div>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/mock.ts' // Importamos los datos del mock

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products, // Usamos los productos del mock
    }
  },
  methods: {
    goHome() {
      this.$router.push('/home') // Redirige a la página home
    },
  },
}
</script>

<style scoped>
.catalogo {
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
