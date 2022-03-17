<template>
  <div>
    <h1>Detalle productos</h1>

    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#"> </b-navbar-brand>
      </b-navbar>
    </div>

    <div id="nav">
      <router-link to="/">Products</router-link> |
      <router-link to="/products/:id">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/orders">Orders</router-link>
    </div>

    <div class="titleProduct">
      <span>
        <router-link
          :to="{ name: 'Products', params: { id: product.id} }"
          v-for="(product, index) in products" :key="index">
     
        
    <div class=detalle>
        <b-card>
          <b-card-header>
            <b-row>
              <b-col sm="8">
                <b-card-title>
                  <h3>{{ product.name }}</h3>
                </b-card-title>
              </b-col>
              <b-col sm="4">
                <b-card-title>
                  <h3>{{ product.price }} €</h3>
                </b-card-title>
              </b-col>
            </b-row>
          </b-card-header>
          <b-card-body>
            <b-row>
              <b-col sm="8">
                <b-card-text>
                  {{ product.short }}
                        <hr>
                         <img
                  :src="product.mainImage"
                  alt="holaxd"
                  width="220"
                  height="220"
                />
                </b-card-text>
              </b-col>
              <b-col sm="4">
                <b-card-text>
                  {{ product.description }}
                </b-card-text>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
        <b-button variant="outline-primary">Añadir</b-button>
         <b-button variant="outline-danger">Eliminar</b-button>
      </div>
        <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="100"
    img-height="75"
  ><img :src="product.images"
                  alt="holaxd"
                  width="100"
                  height="100"
                v-for="(product) in products" :key="product.id" />

    <b-carousel-slide> 
      

    </b-carousel-slide> 
  </b-carousel>
</div>
        </router-link>
      </span>
    </div>

    <Product />
  </div>
</template>
<script>
import Product from "@/components/Product/Product.vue";
import { BCarousel } from 'bootstrap-vue'


export default {
  name: "Products",

  components: {
    Product,
    BCarousel
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
