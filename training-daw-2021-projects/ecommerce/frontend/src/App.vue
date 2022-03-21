<template>
  <div id="app">
    <Navbar></Navbar>

    

    <div id="nav">
      <router-link to="/">Products</router-link> |
      <router-link to="/products/:id">Product</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/orders">Orders</router-link>
    </div>

    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
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
  computed: {
    isMock() {
      return process.env.VUE_APP_API_IS_MOCK === "true";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  padding: 0;
  font-family: montserrat bold, sans-serif !important;
  color: rgb(41, 41, 41);
  background: #f2f2f2;
  font-size: 1em;
  padding-top: none;
}

#nav {
  padding: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

main {
  background-color: whitesmoke;
}

.columnasMain {
  display: grid;
  grid-template-columns: 78% 22%;
}

.columnas {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 33% 33% 34%;
  margin: 00px;
  border-radius: 5px;
  text-align: center;
}

.divsProduct {
  /*border: 2px solid rgb(95, 95, 95);*/
  /*border: 1px solid #6e6e6e;*/
  width: 240px;
  height: 470px;
  margin: 25px !important ;
  display: block;
  border-radius: 5px;
  text-align: center;
  break-before: column;
  break-after: column;
  break-inside: avoid;
  orphans: 2;
  box-decoration-break: clone;
  column-fill: auto;
  background: white;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  border-radius: 5px;
}

.divsProduct .content {
  padding: 0px;
}

.titleProduct {
  text-align: center;
  margin: 0 auto;
  padding: 5% 0%;
  background-color: gainsboro;
  border-radius: 5px;
}

.divImgProduct {
  text-align: center;
  padding-top: 4%;
  border-radius: 5px;
  object-fit: contain;
}

.imgProduct {
  width: 200px;
  height: 100px;
  border-radius: 5px;
}

.imgProduct2 {
  width: 150px;
  height: 100px;
  border-radius: 5px;
}
.imgProductl {
  width: 50px;
  height: 25px;
  border-radius: 5px;
}

.op {
  width: 20px;
  height: 20px;
  border-radius: 5px;
}

.price {
  text-align: center;
}

.buttonsProduct {
  grid-template-columns: 33% 66%;
  border-radius: 5px;
  margin-bottom: 10%;
}

.columnasCarrito {
  padding: 10px;
  position: relative;
  flex-wrap: wrap;
  text-align: end;
  border-radius: 5px;
  position: block;
  padding-top: 80px;
  border-radius: 5px;
  text-align: center;
  break-before: column;
  break-after: column;
  break-inside: avoid;
  orphans: 2;
  box-decoration-break: clone;
  column-fill: auto;
}

.carrito {
  background-color: gainsboro;
  margin-top: 2%;
  height: 300px;
  border-radius: 10px;
  border-radius: 5px;
  text-align: center;
  break-before: column;
  break-after: column;
  break-inside: avoid;
  orphans: 2;
  box-decoration-break: clone;
  column-fill: auto;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-top: 0px;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 15px;
  background-color: gainsboro;
}

h2 {
  margin-bottom: 10px;
}

.button {
  width: 105px;
  height: 50px;
  text-decoration: none;
  font-weight: 60px;
  font-size: 20px;
  color: #333333;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #69d2e7;
  border-color: #69d2e7;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: 0.1s all ease-in-out;
  -moz-transition: 0.1s all ease-in-out;
  -o-transition: 0.1s all ease-in-out;
  transition: 0.1s all ease-in-out;
  bottom: 10px;
}
.button:hover {
  background-color: #c3e2ff;
}

.button1 {
  width: 100px;
  height: 50px;
  text-decoration: none;
  font-weight: 60px;
  font-size: 20px;
  color: #333333;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #69d2e7;
  border-color: #69d2e7;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: 0.1s all ease-in-out;
  -moz-transition: 0.1s all ease-in-out;
  -o-transition: 0.1s all ease-in-out;
  transition: 0.1s all ease-in-out;
  bottom: 5px;
}
.button1:hover {
  background-color: #c3e2ff;
  color: whitesmoke;
}

.button2 {
  width: 100px;
  height: 50px;
  text-decoration: none;
  font-weight: 60px;
  font-size: 20px;
  color: #333333;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #d880e4;
  border-color: #d880e4;
  border-width: 3px;
  border-style: solid;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: 0.1s all ease-in-out;
  -moz-transition: 0.1s all ease-in-out;
  -o-transition: 0.1s all ease-in-out;
  transition: 0.1s all ease-in-out;
  bottom: 5px;
}
.button2:hover {
  background-color: #f8c5f1;
  color: crimson;
}
</style>
