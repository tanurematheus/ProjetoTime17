<template>
  <div>
    <v-container id="grid" v-for="product in data" :key="product.id">
      <v-card id="card">
        <div class="container-img">
          <img :src="product.imagem" :alt="product.nome" />
        </div>
        <div class="details">
          <span>{{ product.nome }} </span>
          <span>{{ product.sabor }}</span>
          <span>R$ {{ product.preco }}</span>
        </div>
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
  created() {
    this.isDark = this.$vuetify.theme.isDark;
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
  box-shadow: rgb(17 21 23) 0px 0px 5px 1px;
}

.card .container-img {
  padding: 1rem;
}

.card .container-img img {
  border-radius: 0.5rem;
}

.card .details {
  flex-direction: column !important;
  padding: 0.5rem;
}

.card .details span {
  font-family: inherit;
  word-break: break-all;
  font-size: 0.9rem;
}

/* .card {
  color: #fff;
  background: rgb(33, 33, 33);
  border-radius: .5rem;
  box-shadow: rgb(17 21 23) 0px 0px 5px 1px;
}

.card .container-img {
  padding: 1rem;
}

.card .container-img img {
  border-radius: .5rem;
}

.card .details {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.card .details span {
  font-size: 1.2rem;
} */
</style>