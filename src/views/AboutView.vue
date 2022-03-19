<template>
  <div>
    <div v-for="pessoa in pessoas" :key="pessoa.id">
      <v-card class="ma-10" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              {{ pessoa.nome }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ pessoa.cargo }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn a :href="pessoa.linkedin" outlined rounded text>
            Linkdelin
          </v-btn>
          <v-btn a :href="pessoa.git" outlined rounded text> GitHub </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "AboutView",
  data: () => ({
    pessoas: [
      {
        id: 0,
        nome: "Camilla Naomy Tsuda",
        cargo: "Desenvolvedora",
        linkedin: "https://www.linkedin.com/in/camilla-naomy-tsuda-33839b133/",
        git: "https://github.com/naomy19",
      },
      {
        id: 1,
        nome: "Gustavo Luiz Quadra",
        cargo: "Desenvolvedor",
        linkedin: "https://www.linkedin.com/in/gustavoquadra/",
        git: "https://github.com/gustavolq",
      },
      {
        id: 2,
        nome: "Leidirene Marques",
        cargo: "Desenvolvedora",
        linkedin: "https://www.linkedin.com/in/leidirene/",
        git: "https://github.com/Leidirene",
      },
      {
        id: 3,
        nome: "Matheus Tanure",
        cargo: "Desenvolvedor",
        linkedin: "https://www.linkedin.com/in/matheus-tanure/",
        git: "https://github.com/tanurematheus",
      },
      {
        id: 4,
        nome: "Ricardo Muraoka",
        cargo: "Desenvolvedor",
        linkedin: "https://www.linkedin.com/in/ricardo-muraoka/",
        git: "https://github.com/ricardomuraoka",
      },
      {
        id: 5,
        nome: "Vitor Hugo Gonçalves Costa",
        cargo: "Desenvolvedor",
        linkedin: "https://www.linkedin.com/in/vhgc1",
        git: "https://github.com/VHGC1",
      },
    ],
  }),
};
</script>