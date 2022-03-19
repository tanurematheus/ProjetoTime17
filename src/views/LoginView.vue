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
            :error-messages="passwordErrors"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            counter
            @click:append="show1 = !show1"
     ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      login
    </v-btn>
    <v-btn class="mr-4" @click="clear">
      limpar
    </v-btn>
    <v-btn id="btn-cadastro">
      <a href="#/cadastro">cadastro</a>
    </v-btn>
  </form>
    
  </v-container>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {

    validations: {
      email: { required, email },
      password: { required }
    },

    data () {
      return {
        email: '',
        show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Preencha a senha',
          min: v => v.length >= 8 || 'Min 8 caracteres'
        },
      }
    },
    computed: {
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Informe e-mail válido')
        !this.$v.email.required && errors.push('Preencha o e-mail')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Preencha a senha')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.email = ''
        this.password = ''
      },
    },
  }
</script>

<style scoped>
#btn-cadastro a {
  text-decoration: none;
  color: #fff;
}
</style>