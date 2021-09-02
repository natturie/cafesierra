<template>
  <div class="productos">
    <sidebar msg="Pepito" />
    <div class="tabla-product">
      <h3>Productos</h3>
      <button class="add-product">
        <router-link class="router-bot" to="/addproduct"
          >Agregar producto</router-link
        >
      </button>
      <table class="product-table" v-if="productAll.length > 0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productAll" :key="product.id">
            <td>{{ product.productName }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button v-on:click="editProduct">
                <img src="../assets/editar.png" alt="editar" />
                </button>
            </td>
            <td>
              <button v-on:click="productDelete(product.id)">
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
  name: "Products",
  components: {
    Sidebar,
  },
  data() {
    return {
      username: null,
      productAll: [],
    };
  },

  created() {
    this.username = localStorage.getItem("username");
  },
  apollo: {
    productAll: {
      query: gql`
        query Query {
          productAll {
            id
            productName
            category
            stock
            price
          }
        }
      `,
      variables: {
        username: localStorage.getItem("username"),
      },
    },
  },

  methods: {
    async productDelete(id) {
      console.log(id);
      await this.$apollo.mutate({
        mutation: gql`
          mutation ProductDeleteMutation($productDeleteId: Int!) {
            productDelete(id: $productDeleteId) {
              Status
            }
          }
        `,

        variables: {
          productDeleteId: id,
        },
      });
      Swal.fire({
        title: "Deseas eliminar el producto?",
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

    editProduct() {
      this.$router.push({ name: "EditProduct" });
    },
  },
};
</script>
<style scoped>
.tabla-product {
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
.add-product {
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

.product-table {
  width: 100%;
  margin: 40px 0 60px 0;
  font-size: 20px;
  color: #224957;
  text-align: center;
}

.product-table thead {
  background: #306966;
  color: white;
}

.product-table button {
  border: none;
  cursor: pointer;
  background: none;
}
</style>