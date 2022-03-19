<template>
  <div class="mt-10">
    <v-bottom-navigation app :value="value" color="grey" dark >
      <router-link  class="text-decoration-none" to="/">
        <v-btn retain-focus-on-click class="mt-2">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>
      </router-link>

      <router-link class="text-decoration-none" to="/lojas">
        <v-btn 
        class="mt-2"
        >
          <span>Lojas</span>

          <v-icon>mdi-store-search-outline</v-icon>
        </v-btn>
      </router-link>

      <router-link class="text-decoration-none" to="/about">
        <v-btn class="mt-2">
        <span>Produtos</span>

        <v-icon>mdi-egg-easter</v-icon>
      </v-btn>
      </router-link>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data: () => ({ value: 1 }),
};
</script>
