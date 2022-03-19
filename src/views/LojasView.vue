<template>
  <v-container>
    <h1 class="text-center">Lojas</h1>
  </v-container>
</template>

<script>
export default {
  created() {
    fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  },
};
</script>