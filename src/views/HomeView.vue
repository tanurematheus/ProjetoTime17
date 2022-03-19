<template>
  <v-container>
    <div class = "mt-7 home-img">
      <img src="../assets/Home-img.png" alt="Home">
    </div>
    <p class="text-home">
       A pandemia veio, e com ela, várias famílias tiveram que criar ideias para diversificar na hora de compor e recuperar a renda, sendo uma delas a venda de Ovos de Páscoa Caseiros. <br> <br>
       Pensando nisso, realizamos a criação do E-Páscoa, um site que ajudam pessoas que querem realizar compra de Ovos de Páscoa caseiros com vendedores, auxiliando compradores a economizarem na compra de Ovos de Páscoa e auxiliando as famílias que necessitam recuperar a sua renda.
    </p>
    <h2 class="text-center">Ovos de Páscoa</h2>
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

<style scoped>
.home-img {
    display: flex;
    justify-content: center;
    height:50vw;
  }

.text-home {
    font-size: 13px;
    padding: 12px;
  }
</style>