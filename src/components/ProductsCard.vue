<template>
  <div>
    <v-container id="grid" v-for="product in data" :key="product.id">
      <v-card id="card">
        <v-container id="container-img">
          <img :src="product.imagem" :alt="product.nome" />
        </v-container>
        <v-container id="details">
          <span>{{ product.nome }} </span>
          <span>{{ product.sabor }}</span
          ><br />
          <span>R$ {{ product.preco }}</span>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProfuctsCad",
  data: () => ({
    isDark: true,
  }),
  props: {
    data: {
      type: Array,
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

#grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

#card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5rem;
}

#container-img img {
  border-radius: 0.5rem;
}
</style>