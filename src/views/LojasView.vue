<template>
  <v-container>
    <h1 class="text-center">Lojas</h1>
    <LojasCard :data="listarLojas" />
  </v-container>
</template>

<script>
import LojasCard from "../components/LojasCard.vue";

export default {
  name: "LojasView",
  data: () => ({
    produtos: [],
  }),
  components: {
    LojasCard,
  },
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        this.produtos = json;
      });
  },
  computed: {
    listarLojas() {
      const ids = [];
      const lojas = [];
      for (let produto of this.produtos) {
        if (!ids.includes(produto.local.id)) {
          lojas.push(produto.local);
          ids.push(produto.local.id);
        }
      }
      return lojas;
    },
  },
};
</script>