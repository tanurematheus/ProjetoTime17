<template>
  <v-container>
    <h1 class="text-center">Loja</h1>
    <ProductsCard :data="filtrarProdutos" />
  </v-container>
</template>

<script>
import ProductsCard from "../components/ProductsCard.vue";

export default {
  name: "LojaView",
  data: () => ({
    produtos: [],
  }),
  components: {
    ProductsCard,
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.produtos = json;
      });
  },
  computed: {
    filtrarProdutos() {
      const filtrado = [];
      for (let produto of this.produtos) {
        if (produto.local.nome == this.$route.params.id) {
          filtrado.push(produto);
        }
      }
      return filtrado;
    },
  },
};
</script>