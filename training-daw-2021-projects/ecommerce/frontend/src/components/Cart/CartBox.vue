<template>
  <div>
    <b-container class="carrito" fluid="sm">
      <h1>Carrito Box</h1>

      <h2>imagenes</h2>
      <h3>nombre</h3>
      <h4>precio</h4>
      <h5>cantidad</h5>

     
      <b-button variant="success">Realizar Pedido</b-button>
     

      <b-button variant="danger">Borrar Cesta</b-button>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.carrito {
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
</style>