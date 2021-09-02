<template>
  <div class="clientes">
    <sidebar msg="Pepito" />
    <div class="tabla-customer">
      <h3>Clientes</h3>

      <button class="add-customer"><router-link class="router-bot" to="/addcustomer">Agregar cliente</router-link></button>
      <table class="customer-table" v-if="clientAll.length > 0" >
        <thead>
          <tr>
           
            <th>Nombre</th>
            <th>cc</th>
            <th>mail</th>
            <th>Puntos</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clientAll" :key="client.id">
            
            <td>{{client.nombres}} {{client.apellidos}}</td>
            <td>{{client.identificacion}}</td>
            <td>{{client.correo}}</td>
            <td>{{client.puntos}}</td>
            <td>
              <button><img src="../assets/editar.png" alt="editar" /></button>
            </td>
            <td >
              <button v-on:click="clienteDelete()">
                <img src="../assets/eliminar.png" alt="eliminar" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import gql from 'graphql-tag'

export default {
  name: "Customers",
  components: {
    Sidebar,
  },

  data() {
    return {
      username: null,
      clientAll: []
    }
  },

  created() {
    this.username = localStorage.getItem('username')
  },

  apollo: {
    clientAll: {
      query: gql`
        query Query {
        clientAll {
          id,
          nombres,
          apellidos,
          identificacion,
          correo,
          puntos
          }
      }`,
      variables: {
        username: localStorage.getItem('username')
      }
    },
    
  },

  methods: {
    async clienteDelete() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ClientDeleteMutation($clientDeleteId: String!) {
            clientDelete(id: $clientDeleteId) {
              Status
            }
          }`,

        variables: {
          clientDeleteId: {
            id:this.id
          }
        },
        
      })
      .then(result => {
        alert('eliminado exitosamente!')
        console.log(result)
      })
      .catch((e) => {
        alert('No se pudo eliminar el cliente')
        console.log(e);
      })
    }
  }
};
</script>
<style scoped>
.tabla-customer {
  width: 70%;
  position: absolute;
  top: 18%;
  left: 25%;
  font-family: "Lexend", sans-serif;
}

h3 {
  color: #20df7f;
  font-size: 36px;
  margin-left: 35px;
}
.add-customer {
  background: #20DF7F;
  margin-left: 35px;
  padding: 8px 16px;
  font-size: 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.router-bot{
text-decoration: none;
color: #224957;
}

.customer-table {
  width: 100%;
  margin-top: 40px;
  font-size: 20px;
  color: #224957;
  text-align: center;
}

.customer-table thead {
  background: #306966;
  color: white;
}

.customer-table button {
  border: none;
  cursor: pointer;
  background: none;
}

</style>