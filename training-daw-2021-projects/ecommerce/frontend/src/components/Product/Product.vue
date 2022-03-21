<template>
  <div>

    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#"> </b-navbar-brand>
      </b-navbar>
    </div>


    <h1>producto desde componente: {{ $route.params.id }}</h1>
    <div>{{product.name}}</div>
    <div>{{product.description}}</div>

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
           
          </div>   
  </div>
</template>

<script>

export default {
  name: "Product",
components: {
    
  },
  created() {
    fetch("http://localhost:3000/products/"+this.$route.params.id)  
      .then((result) => result.json())
      .then((data) => (this.product = data));
  },
  data() {
    return {
      product: [],
    };
  },
};
</script>
