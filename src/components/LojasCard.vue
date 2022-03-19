<template>
  <div>
    <v-container id="grid" v-for="loja in data" :key="loja.id">
      <v-card id="card">
        <v-container id="container">
          <v-icon class="mr-3">mdi-store</v-icon>
          <span class="text-h5">{{ loja.nome }} </span>
        </v-container>
        <v-container id="details">
          <span>{{ loja.endereco }}</span
          ><br />
          <span>{{ loja.cep }}</span>
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
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>