<template>
  <div>
    <div>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#"> </b-navbar-brand>
      </b-navbar>
    </div>

    <h1>producto desde componente: {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Product",
};
</script>
