<template>
  <div class="agregarcost">
      <sidebar msg="Pepito" />
    <div class="form-agregarcost">
        <h2>Cliente nuevo</h2>
      <form class="flex-signup" @submit.prevent="clienteAdd">
        <input type="text" placeholder="nombres" v-model="nombres"/>
        <input type="text" placeholder="apellidos" v-model="apellidos" />
        <input type="text" placeholder="cc" v-model="identificacion"/>
        <input type="email" placeholder="email" v-model="correo"/>
        <div class="addbtn">
            <button type="submit">Agregar cliente</button>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import gql from "graphql-tag";

export default {
  name: "Addcustomer",

  components: {
    Sidebar,
  },

  data() {
    return {
      nombres: '',
      apellidos: '',
      identificacion: '',
      correo: ''
    }
  },

  methods: {
    async clienteAdd() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ClientAddMutation($clientAddClientAdd: ClientAddInput!) {
            clientAdd(clientAdd: $clientAddClientAdd) {
              Status
            }
          }`,
        variables: {
          clientAddClientAdd: {
            nombres: this.nombres,
            apellidos: this.apellidos,
            identificacion: this.identificacion,
            correo: this.correo
          }
        },
        
      })
      .then(result => {
        alert('cliente creado exitosamente!')
        console.log(result)
        this.customers(result)
      })
      .catch((e) => {
        alert('No se pudo crear el cliente')
        console.log(e);
      })
    },
    customers(result) {
      console.log(result)
      this.$router.push({ name: 'Customers' })
    }
  }
};
</script>

<style scoped>
.form-agregarcost {
  width: 50%;
  height: 50%;
  top: 30%;
  left: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center;
	align-content: center; */
  position: absolute;
  font-family: "Lexend", sans-serif;
}

.form-agregarcost h2{
    margin-bottom: 40px;
    font-size: 28px;
    color: #224957;
}

.form-agregarcost input {
  border-radius: 5px;
  width: 290px;
  height: 45px;
  margin: 5px 20px;
}

::placeholder{
  
  font-size: 18px;
  padding: 5px 10px;
  color: gray;
}


.addbtn {
  width: 100%;
  margin-left: 170px;
  padding: 10px;
}
.addbtn button {
  background: #20df7f;
  border-radius: 5px;
  border-style: none;
  width: 250px;
  height: 45px;
  padding: 10px;
  margin: 10px 0;
  color: #224957;
  font-size: 22px;
  cursor: pointer;
}
</style>
