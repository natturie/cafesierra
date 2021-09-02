<template>
  <div class="carrito">
    <sidebar msg="Pepito" />
    <div class="factura">
        <!-- <h3>Productos</h3>
      <button class="add-product">
        <router-link class="router-bot" to="/addproduct"
          >Agregar producto</router-link
        >
      </button> -->
        <div>
      <table class="product-table">
        <thead>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Método de pago</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </thead>
        <tbody>
          <td>Pan</td>
          <td>5</td>
          <td>22000</td>
          <td>Efectivo</td>
          <td>
            <button>
              <img src="../assets/editar.png" alt="editar" />
            </button>
          </td>
          <td>
            <button>
              <img src="../assets/eliminar.png" alt="eliminar" />
            </button>
          </td>
        </tbody>
      </table>
      <h3>Total <span>Total factura</span></h3>
      <button>Pagar</button>
    </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "Car",
  components: {
    Sidebar,
  },
  data() {
    return {
      productId: "",
    };
  },
  created() {
    this.productId = this.$route.params.id;
  },
};
</script>

<style scoped>
.factura {
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