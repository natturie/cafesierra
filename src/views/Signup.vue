<template>
  <div class="signup">
    <formulario-inicio msg="Registro" />
    <div class="capa-signup">
      <form class="flex-signup" @submit.prevent="createUser">
        
        <input type="text" placeholder="nombres" v-model="nombres"/>
        <input type="text" placeholder="username" v-model="username"/>
        <input type="text" placeholder="apellidos" v-model="apellidos"/>
        <input type="password" placeholder="password" v-model="password" />
        <input type="email" placeholder="email" v-model="email" />
        <div class="signupbtn">
          <button type="submit">Registro</button>
        </div>
      </form>
      
    </div>
    <router-link to="/"><img class="back-home" src="../assets/home.png" alt="back home"/>
    </router-link>
  </div>
</template>

<script>
//  @ is an alias to /src
import FormularioInicio from "../components/FormularioInicio.vue";
import gql from "graphql-tag";

export default {
  name: "FormularioSignup",
  components: {
    FormularioInicio,
  },

  data() {
    return {
      username: '',
      password: '',
      name: '',
      apellido: '',
      email: '',
    }
  },

   methods: {
    async createUser() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation UserCreateMutation($userCreateData: DataInput!) {
            userCreate(data: $userCreateData) {
              username,
              name,
              apellido,
              email,
              password
            }
          }`,
        variables: {
          userCreateData: {
            username: this.username,
            password: this.password,
            name:this.name,
            apellido:this.apellido,
            email: this.email
          }
        },
        
      })
      .then(result => {
        alert('Usuario creado correctamente')
        console.log(result)
      })
      .catch((e) => {
        alert('No se pudo crear el usuario')
        console.log(e);
      })
    },
   }
};
</script>

<style scoped>
.capa-signup {
  width: 50%;
  height: 50%;
  top: 30%;
  left: 25%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center;
	align-content: center; */
  position: absolute;
}

.capa-signup input, .rol {
  background: #224957;
  border-radius: 5px;
  border-style: none;
  width: 290px;
  height: 45px;
  margin: 5px 20px;
}

::placeholder, .rol {
  color: white;
  font-family: "Lexend", sans-serif;
  font-size: 18px;
  padding: 5px 10px;
}


.signupbtn {
  width: 100%;
  margin-left: 170px;
  padding: 10px;
}
.signupbtn button {
  background: #20df7f;
  border-radius: 5px;
  border-style: none;
  width: 250px;
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

