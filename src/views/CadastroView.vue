<template>
  <v-container>
    <h1 class="text-center">Cadastro de loja</h1>
    <form>
      <v-text-field
        v-model="nome"
        :error-messages="nomeErro"
        :counter="10"
        label="Nome da loja"
        required
        @input="$v.nome.$touch()"
        @blur="$v.nome.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="endereco"
        :error-messages="enderecoErro"
        label="Endereço"
        required
        @input="$v.endereco.$touch()"
        @blur="$v.endereco.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="cep"
        :error-messages="cepErro"
        label="CEP"
        required
        @input="$v.cep.$touch()"
        @blur="$v.cep.$touch()"
      ></v-text-field>

      <v-text-field
            v-model="senha"
            :error-messages="senhaErro"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
      
      <v-text-field
            v-model="confirmaSenha"
            :error-messages="confirmaErro"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min, confirmacaoSenha]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirmação de senha"
            counter
            @click:append="show2 = !show2"
        ></v-text-field>


      <v-btn
        class="mr-4"
        @click="submit"
      >
        cadastrar
      </v-btn>
      <v-btn @click="clear">
        limpar
      </v-btn>
    </form>
  </v-container>
</template>

<script>
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {

    validations: {
      nome: { required, maxLength: maxLength(10) },
      endereco: { required },
      cep: { required },
      senha: { required },
      confirmaSenha: { required }
    },

    data: () => ({
      nome: '',
      endereco: '',
      cep: '',
      show1: false,
      show2: false,
      senha: '',
      confirmaSenha: '',
      rules: {
        required: value => !!value || 'Preencha a senha.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
    }),

    computed: {
      nomeErro () {
        const errors = []
        if (!this.$v.nome.$dirty) return errors
        !this.$v.nome.maxLength && errors.push('Nome deve ter até 10 caracteres')
        !this.$v.nome.required && errors.push('Preencha o nome.')
        return errors
      },
      enderecoErro () {
        const errors = []
        if (!this.$v.endereco.$dirty) return errors
        !this.$v.endereco.required && errors.push('Preencha o endereço.')
        return errors
      },
      cepErro () {
        const errors = []
        if (!this.$v.cep.$dirty) return errors
        !this.$v.cep.required && errors.push('Preencha o CEP.')
        return errors
      },
      senhaErro () {
        const errors = []
        if (!this.$v.senha.$dirty) return errors
        !this.$v.senha.required && errors.push('Preencha a senha.')
        return errors
      },
      confirmaErro () {
        const errors = []
        if (!this.$v.confirmaSenha.$dirty) return errors
        !this.$v.confirmaSenha.required && errors.push('Preencha confirmação de senha.')
        return errors
      },
      confirmacaoSenha() {
      return () => (this.senha === this.confirmaSenha) || 'Senhas não conferem.'
    }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.nome = '',
        this.endereco = '',
        this.cep = '',
        this.senha = '',
        this.confirmaSenha = ''
      },
    },
  }
</script>

<style scoped>

</style>
