<template>
  <div>



    <h1>producto desde Carrito: {{ product.id }}</h1>
    <div>{{product.productName}}</div>
    <div>{{product.productQuantity}}</div>
    <div>{{product.productPrice}}</div>
    <div>{{product.productId}}</div>

      <div>
            <span style="color: black; font-size: 30px">
                <b>Detalles del producto: {{ product.id }}</b>
            </span>

        </div>
    
     <button @click="removeProduct" variant="danger">Quietar de la cesta</button>


  </div>



</template>



<script>

import api_url from "../../utils/api";

export default {
props:["product"],
    methods: {
         removeProduct() {
            fetch(api_url("/cart/" + this.product.id), {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
         }  
    },

}

</script>

<style>

</style>