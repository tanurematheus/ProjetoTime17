<template>
  <v-container>
    <h1 class="text-center">Pagina Inicial</h1>
    <ProductsCard :data="products" />
  </v-container>
</template>

<script>
import ProductsCard from "../components/ProductsCard.vue";

export default {
  name: "HomeView",
  components: {
    ProductsCard,
  },
  data: () => ({
    products: [],
  }),
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => (this.products = json));
  },
};
</script>
