<template>
  <v-container>
    <h1 class="text-center">Entre em contato</h1>
    <form>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-textarea color="teal">
        <template v-slot:label>
          <div>Mensagem</div>
        </template>
      </v-textarea>

      <v-container id="buttons">
        <v-btn class="mr-4" @click="submit"> Enviar </v-btn>
      </v-container>
    </form>
  </v-container>
</template>


<script scoped>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "ProductForm",
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