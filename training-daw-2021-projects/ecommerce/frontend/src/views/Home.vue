<template>
  <div class="home">
    <h1>Listado de productos</h1>

 
    <div id="nav">
      <router-link to="/">Products</router-link> |
      <router-link to="/products/:id">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/orders">Orders</router-link>

      <main>
        <div class="columnasMain">
          <div class="columnas">
            <div
              class="divsProduct"
              v-for="product in products"
              v-bind:key="product.id"
            >
              <div class="titleProduct">
                <span>
                  <router-link
                    :to="{ name: 'Products', params: { id: product.id } }"
                   >
                    {{ product.name }}
                  </router-link>
                </span>
              </div>

              <div class="divImgProduct">
                <img
                  :src="product.mainImage"
                  alt="holaxd"
                  width="220"
                  height="220"
                />
              </div>

              <div class="price">
    
                <span class="bodyStyle"> {{ product.price }} € </span>
              </div>

              <div class="description">
                <span class="bodyStyle">
                  {{ product.short }}
                </span>
              </div>

              <div class="buttonsProduct" style="text-align: center">
                <a>
                  <button @click="addToCart(product.id, product.name, product.price)" variant="outline-primary">Cesta+</button>
                </a>
                <a>
                  <button @click="removeProduct" variant="danger">Cesta-</button>
                </a>
              </div>
            </div>
          </div>

          <div class="columnasCarrito">
            <CartBox></CartBox>
          </div>
        </div>

        <UserInfo
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :Category="product.category"
          :Short="product.short"
          :Price="product.price"
          :Image="product.mainImage"
        />
        
      </main>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>

import CartBox from "@/components/Cart/CartBox.vue";
import api_url from "../utils/api";


export default {
  name: "Home",
  components: {
    CartBox,
    
  },
  created() {
    fetch(api_url("/products"))
      .then((result) => result.json())
      .then((data) => (this.products = data));
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    addToCart(productId, productName, productPrice) {
      fetch(api_url("/cart/"), {
        method: "POST",
        body: JSON.stringify({
          productId: productId,
          productName: productName,
          quantity: 1,
          productPrice: productPrice,
        }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
    removeProduct(id, quantity, productId, productName, productPrice) {
      fetch(api_url("/cart/" + id), {
        method: "DELETE",
        body: JSON.stringify({
          productId: productId,
          productName: productName,
          quantity: quantity,
          productPrice: productPrice,
        }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
  },
};
</script>
<style scoped>
</style>
