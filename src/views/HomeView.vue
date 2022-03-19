<template>
  <v-container>
<<<<<<< HEAD
    <div class = "mt-7 home-img">
      <img src="../assets/Home-img.png" alt="Coleta">
    </div>
    <p class="text-home text-justify"> Bem-vindo </p>
  </v-container>
</template>

<style scoped>
.home-img {
    display: flex;
    justify-content: center;
    height:100%;
  }

.text-home {
    font-size: 14px;
  }
</style>
=======
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
>>>>>>> c666df5918f3e85d41f409c116a869324a2ae16e
