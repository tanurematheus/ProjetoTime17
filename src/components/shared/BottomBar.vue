<template>
  <div class="mt-10">
    <v-bottom-navigation
      background-color="indigo"
      active-class="green--text text--lighten-2"
      app
      :value="value"
      
    >
      <router-link class="text-decoration-none" to="/">
        <v-btn retain-focus-on-click class="mt-2">
          <span>Home</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

      <router-link class="text-decoration-none" to="/lojas">
        <v-btn class="mt-2">
          <span>Lojas</span>

          <v-icon>mdi-store-search-outline</v-icon>
        </v-btn>
      </router-link>

      <router-link class="text-decoration-none" to="/sobre">
        <v-btn class="mt-2">
          <span>Time</span>

          <v-icon>mdi-microsoft-teams</v-icon>
        </v-btn>
      </router-link>

      <router-link class="text-decoration-none" to="/login">
        <v-btn class="mt-2">
          <span>Login</span>

          <v-icon>mdi-login</v-icon>
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
