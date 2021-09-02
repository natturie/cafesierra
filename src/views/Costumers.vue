<template>
  <div class="clientes">
    <sidebar msg="Pepito" />
    <div class="tabla-costumer">
      <h3>Clientes</h3>

      <button class="add-costumer"><router-link class="router-bot" to="/addcostumer">Agregar cliente</router-link></button>
      <table class="costumer-table" v-if="clientAll.length > 0">
        <thead>
          <tr>
            <th>ID</th>
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
            <td>0000</td>
            <td>Pepita Perez</td>
            <td>1000111333</td>
            <td>pepita@gmail.com</td>
            <td>123</td>
            <td>
              <button><img src="../assets/editar.png" alt="editar" /></button>
            </td>
            <td>
              <button>
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
  name: "Costumers",
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
      }
      `,
      variables: {
        username: localStorage.getItem('username')
      }
    }
  }
};
</script>
<style scoped>
.tabla-costumer {
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
.add-costumer {
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

.costumer-table {
  width: 100%;
  margin-top: 40px;
  font-size: 20px;
  color: #224957;
  text-align: center;
}

.costumer-table thead {
  background: #306966;
  color: white;
}

.costumer-table button {
  border: none;
  cursor: pointer;
  background: none;
}

</style>