<template>
  <div>
    <v-container id="grid" v-for="loja in data" :key="loja.id">
      <v-card id="card">
        <v-container id="container-img">
          <v-icon>mdi-store</v-icon>
        </v-container>
        <v-container id="details">
          <span>{{ loja.nome }} </span>
          <span>{{ loja.endereco }}</span
          ><br />
          <span>R$ {{ loja.cep }}</span>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LojasCard",
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