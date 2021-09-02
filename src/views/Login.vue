<template>
  <div class="login">
    <formulario-inicio msg="Ingresar"/> 
    <form class="capa-login"  @submit.prevent="authenticate">
        <input class="input-form" type="text" placeholder="username" v-model="username">
        <input type="password" placeholder="password" v-model="password">
        <button type="submit">Login</button>
    </form>
    <router-link to="/"><img class="back-home" src="../assets/home.png" alt="back home"></router-link>
  </div>
</template>

<script>
//  @ is an alias to /src
import FormularioInicio from '../components/FormularioInicio.vue'
import gql from "graphql-tag";
//import jwtDecode from 'jwt-decode'

 export default {
   name: 'FormularioLogin',

   components: {
     FormularioInicio
   },

   data() {
    return {
      username: '',
      password: ''
    }
  },

   methods: {
    async authenticate() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation AuthenticateMutation($authenticateCredentials: CredentialsInput!) {
                  authenticate(credentials: $authenticateCredentials) {
                  token
                  }
          }`,
        variables: {
          authenticateCredentials: {
            username: this.username,
            password: this.password
          }
        },
        
      })
      .then(result => {
        let data = result.data.authenticate
        this.setUserData(data)
      })
      .catch((e) => {
        alert('ERROR: Invalid credentials !!')
        console.log(e);
      })
    },
    setUserData(data) {
      console.log(data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('username', this.username)
      this.$emit('logged')
      this.$router.push({ name: 'Welcome' })
    }
  }
}

</script>

<style>
.capa-login{
  width: 100%;
  top: 38%; 
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
  position: absolute;
}

.capa-login input{
  background: #224957;
  border-radius: 5px;
  border-style: none;
  width: 290px;
  height: 45px;
  margin: 10px 0;
}

::placeholder { 
  color: white; 
  font-family: "Lexend", sans-serif;
  font-size: 18px;
  padding: 5px 10px;
  }


  .capa-login button{
    background: #20DF7F;
    border-radius: 5px;
    border-style: none;
    width: 290px;
    height: 45px;
    padding: 10px;
    margin: 10px 0;
    color: #224957;
    font-family: "Lexend", sans-serif;
    font-size: 22px;
    cursor: pointer;
  }

  .back-home{
    position: absolute;
    width: 7%;
    top: 1px;
    margin: 20px;
    cursor: pointer;
  }
</style>


      