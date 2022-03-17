<template>
  <div class="cart">
    <div>
      <h1>Carrito</h1>

      <div>
        <!-- Image and text -->
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#"> </b-navbar-brand>
        </b-navbar>
      </div>

      <div id="nav">
        <router-link to="/">Products</router-link> |
        <router-link to="/products/1">Product</router-link> |
        <router-link to="/cart">Cart</router-link> |
        <router-link to="/orders">Orders</router-link>
      </div>

 
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    

      <div
        class="divsProduct"
        v-for="product in products"
        v-bind:key="product.id"
      >
        <div class="titleProduct">
          <span>
            <router-link :to="{ name: 'Product', params: { id: product.id } }">
              {{ product.name }}
            </router-link>
          </span>
        </div>

        <div class="divImgProduct">
          <img :src="product.mainImage" alt="holaxd" width="220" height="220" />
        </div>

        <div class="price">
          <span class="bodyStyle">
            {{ product.price }}
          </span>
        </div>

        <div class="description">
          <span class="bodyStyle">
            {{ product.short }}
          </span>
        </div>
      </div>
  

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
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
