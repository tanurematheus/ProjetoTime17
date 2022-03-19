<template>
  <v-app-bar color="indigo" hide-on-scroll app>
    <v-toolbar-title>
      <h3>
        <strong> E-Páscoa </strong>
      </h3>
    </v-toolbar-title>

    <v-spacer />

    <v-btn color="transparent" small fab @click="darkMode">
      <div v-if="!$vuetify.theme.dark">
        <v-icon>mdi-egg</v-icon>
      </div>

      <div v-else>
        <v-icon>mdi-egg-outline</v-icon>
      </div>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppTopBar",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

