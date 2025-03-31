<template>
  <div class="product-card">
    <img :src="image" alt="Product Image" class="product-image" />
    <h3 class="product-title">{{ title }}</h3>
    <p class="product-description">{{ description }}</p>
    <p class="product-price">${{ price }}</p>
    <button class="product-button">{{ button }}</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: String,
    title: String,
    description: String,
    price: Number,
    button: String,
  },
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 200px;
  margin: 10px;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.product-title {
  font-size: 1.5rem;
  margin: 10px 0;
}

.product-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 20px;
}

.product-button {
  padding: 10px 20px;
  background-color: #33e7ff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.product-button:hover {
  background-color: #1c91b1;
}
</style>
