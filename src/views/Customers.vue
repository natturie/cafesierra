<template>
  <div class="clientes">
    <sidebar msg="Pepito" />
    <div class="tabla-customer">
      <h3>Clientes</h3>

      <button class="add-customer">
        <router-link class="router-bot" to="/addcustomer"
          >Agregar cliente</router-link
        >
      </button>
      <table class="customer-table" v-if="clientAll.length > 0">
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
            <td>{{ client.nombres }} {{ client.apellidos }}</td>
            <td>{{ client.identificacion }}</td>
            <td>{{ client.correo }}</td>
            <td>{{ client.puntos }}</td>
            <td>
              <button v-on:click="editClient(client.id)">
                <img src="../assets/editar.png" alt="editar" />
              </button>
            </td>
            <td>
              <button v-on:click="clienteDelete(client.id)">
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
import gql from "graphql-tag";
import Swal from "sweetalert2";

export default {
  name: "Customers",
  components: {
    Sidebar,
  },

  data() {
    return {
      username: null,
      clientAll: [],
    };
  },

  created() {
    this.username = localStorage.getItem("username");
  },

  apollo: {
    clientAll: {
      query: gql`
        query Query {
          clientAll {
            id
            nombres
            apellidos
            identificacion
            correo
            puntos
          }
        }
      `,
      variables: {
        username: localStorage.getItem("username"),
      },
    },
  },

  methods: {
    async clienteDelete(id) {
      console.log(id);
      await this.$apollo.mutate({
        mutation: gql`
          mutation ClientDeleteMutation($clientDeleteId: String!) {
            clientDelete(id: $clientDeleteId) {
              Status
            }
          }
        `,

        variables: {
          clientDeleteId: id,
        },
      });
      Swal.fire({
        title: "Deseas eliminar el cliente?",
        text: "Esta accion no se puede deshacer",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar",
        cancelButtonText: "Cancelar",
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Eliminado!", "success");
            console.log(result);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelado");
          }
        })
        .catch((e) => {
          alert("No se pudo eliminar el cliente");
          console.log(e);
        });
    },

    editClient(id) {
      console.log(id);
      this.$router.push({ name: "EditCustomer" });
    },
  },
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
  background: #20df7f;
  margin-left: 35px;
  padding: 8px 16px;
  font-size: 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.router-bot {
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