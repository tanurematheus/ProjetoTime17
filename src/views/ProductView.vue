<template>
  <div>
    <v-container id="grid">
      {{ product }}
      <h1>{{product.nome}}</h1>
      <v-container id="container-img">
        <img :src="product.imagem" :alt="product.nome" />
      </v-container>
      <v-container>
        <span>{{ product.nome }} {{ product.sabor }}</span>
        <span>R$ {{ product.preco }}</span>
      </v-container>
      <v-container>
        <h2>{{ product.local.nome }}</h2>
        {{ product.local.endereco }}
        {{ product.local.cep }}
      </v-container>
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
    console.log(json);
    this.product = json.filter(({ id }) => id == this.$route.params.id)[0];
  },
};
</script>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 1fr;
}

#container-img img {
  width: 100%;
}
</style>