<template>
  <v-container>
    <h1 class="text-center">Login</h1>

    <form>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Senha"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-container id="buttons">
        <v-btn class="mr-4" @click="submit"> login </v-btn>
        <v-btn class="mr-4" @click="clear"> limpar </v-btn>
        <v-btn id="btn-cadastro">
          <a href="#/cadastro">cadastro</a>
        </v-btn>
      </v-container>
    </form>
  </v-container>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  validations: {
    email: { required, email },
  },

  data() {
    return {
      email: "",
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
#buttons {
  text-align: center;
}

#btn-cadastro a {
  text-decoration: none;
  color: inherit;
}
</style>