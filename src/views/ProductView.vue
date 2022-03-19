<template>
  <div>
    <v-container id="grid">
      <h1 id="title" >{{ product.nome }}</h1>
      <v-container id="container-img">
        <img :src="product.imagem" :alt="product.nome" />
      </v-container>
      <div id="details">
        <v-container>
          <h2>{{ product.nome }} {{ product.sabor }}</h2><br>
          <h1>R$ {{ product.preco }}</h1>
        </v-container>
        <v-container>
          <h3>Endereço</h3>
          <h4>{{ product.local.nome }}</h4>
          {{ product.local.endereco }}
          {{ product.local.cep }}
        </v-container>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  data: () => ({
    product: {},
  }),
  async created() {
    const response = await fetch(
      "https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json"
    );
    const json = await response.json();
    this.product = json.filter(({ id }) => id == this.$route.params.id)[0];
  },
};
</script>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 1fr;
}

#title {
  text-align: center;
}

#container-img img {
  width: 100%;
  border-radius: 0.5rem;
}

</style>