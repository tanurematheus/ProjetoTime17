<template>
  <div>
    <v-container id="grid" v-for="product in data" :key="product.id">
      <v-card id="card">
        <v-container id="container-img">
          <img :src="product.imagem" :alt="product.nome" />
        </v-container>
        <v-container id="details">
          <span>{{ product.nome }} </span>
          <span>R$ {{ product.preco }}</span>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ProductsCard",
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
}

#card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5rem;
}

#container-img img {
  object-fit: cover;
  border-radius: 0.5rem;
  height: 100%;
}

#details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>