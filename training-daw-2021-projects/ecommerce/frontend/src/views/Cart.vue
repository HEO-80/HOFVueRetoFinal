div<template>
  <div class="cart">
    <div>
      <h1>Carrito</h1>


      <div id="nav">
        <router-link to="/">Products</router-link> |
        <router-link to="/products/1">Product</router-link> |
        <router-link to="/cart">Cart</router-link> |
        <router-link to="/orders">Orders</router-link>
      </div>
    
      <CartDetail  v-for="product in cart"
          :key="product.id"
          :product="product">

         
      </CartDetail>

       
     

      



    </div>
  </div>
</template>

<script>

import CartDetail from "@/components/Cart/CartDetail.vue";
import api_url from "../utils/api";

export default {
  name: "Cart",

  components: {
    CartDetail


  },
  created() {
    fetch("http://localhost:3000/cart/")
      .then((result) => result.json())
      .then((data) => (this.cart = data));
  },

  data() {
    return {
      cart: [],
    };
  },
 methods: {
    addtoCart(productId, productName, productPrice) {
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
      removeProduct(id) {
      fetch(api_url("/cart/" + id), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    },
  },
};
</script>
