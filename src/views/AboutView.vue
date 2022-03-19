<template>
<<<<<<< HEAD
  <h1>teste</h1>
=======
  <v-card
    class="ma-10"
    max-width="344"
    outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          Camilla Naomy Tsuda
        </v-list-item-title>
        <v-list-item-subtitle>Desenvolvedora</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

      <v-card-actions>
      <v-btn a href="https://www.linkedin.com/in/camilla-naomy-tsuda-33839b133/"
        outlined
        rounded
        text>
        Linkdelin
      </v-btn>
      <v-btn a href="https://github.com/naomy19"
        outlined
        rounded
        text>
        GitHub
      </v-btn>
    </v-card-actions>
  </v-card>



>>>>>>> be0c442d29df5f72b2110fdcc097468dd5636612
</template>


<script>
export default {
  name: "AboutView",
  data: () => ({
    pessoas: [
      {
        id: 0,
        nome: "Camilla Naomy Tsuda",
        linkedin: "https://www.linkedin.com/in/camilla-naomy-tsuda-33839b133/",
        git: "https://github.com/naomy19",
      },
      {
        id: 1,
        nome: "Gustavo Luiz Quadra",
        linkedin: "https://www.linkedin.com/in/gustavoquadra/",
        git: "https://github.com/gustavolq",
      },
      {
        id: 2,
        nome: "Leidirene Marques",
        linkedin: "https://www.linkedin.com/in/leidirene/",
        git: "https://github.com/Leidirene",
      },
      {
        id: 3,
        nome: "Matheus Tanure",
        linkedin: "https://www.linkedin.com/in/matheus-tanure/",
        git: "https://github.com/tanurematheus",
      },
      {
        id: 4,
        nome: "Ricardo Muraoka",
        linkedin: "https://www.linkedin.com/in/ricardo-muraoka/",
        git: "https://github.com/ricardomuraoka",
      },
      {
        id: 5,
        nome: "Vitor Hugo Gonçalves Costa",
        linkedin: "https://www.linkedin.com/in/vhgc1",
        git: "https://github.com/VHGC1",
      },
    ],
  }),
};
</script>