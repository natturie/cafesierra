<template>
  <div class="pedidos">
    <sidebar msg="Pepito" />
    <div class="tabla-pedido">
      <h3>Historial pedidos</h3>
      <table class="pedido-table">
        <thead>
          <tr>
            <th>ID pedido</th>
            <th>Cliente</th>
            <th>N° prods</th>
            <th>IVA</th>
            <th>Total</th>
            <th>Puntos</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0000</td>
            <td>1000324980</td>
            <td>3</td>
            <td>1900</td>
            <td>10000</td>
            <td>10</td>
            <td>
              <button>
                <img src="../assets/eliminar.png" alt="eliminar" />
              </button>
            </td>
          </tr>
          <tr>
            <td>0000</td>
            <td>1000324980</td>
            <td>3</td>
            <td>1900</td>
            <td>10000</td>
            <td>10</td>
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
export default {
  name: "pedidos",
  components: {
    Sidebar,
  },
  data() {
    return {
      username: null,
      productAll: []
    }
  },
  
};
</script>
<style scoped>
.tabla-pedido {
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

.pedido-table {
  width: 100%;
  margin-top: 40px;
  font-size: 20px;
  color: #224957;
  text-align: center;
}

.pedido-table thead {
  background: #306966;
  color: white;
}

.pedido-table button {
  border: none;
  cursor: pointer;
  background: none;
}
</style>