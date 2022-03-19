<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <router-view />
    </v-main>
    <BottomBar />
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar";
import BottomBar from "./components/shared/BottomBar.vue";

export default {
  name: "App",
  components: {
    AppTopBar,
    BottomBar,
  },
};
</script>