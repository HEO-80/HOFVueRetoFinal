<template>
  <div>
    <h1>Detalle productos</h1>

    
    <div id="nav">
      <router-link to="/">Products</router-link> |
      <router-link to="/products/:id">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/orders">Orders</router-link>
    </div>


    <Product />

  </div>

</template>

<script>

import Product from "@/components/Product/Product.vue";



export default {
  name: "Products",

  components: {
    Product
  },
  created() {
    fetch("http://localhost:3000/products")
      .then((result) => result.json())
      .then((data) => (this.products = data));
  },

  data() {
    return {
      products: [],
    };
  },
};


</script>

<style scoped>
.detalle{
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  padding: 20px;
  width: 100%;

}
</style>
