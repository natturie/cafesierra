<template>
  <div class="pedidos">
    <sidebar msg="Pepito" />
    <div class="tabla-pedido">
      <h3>Historial pedidos</h3>
      <table class="pedido-table" v-if="orderAll.length > 0">
        <thead>
          <tr>
            <th>ID pedido</th>
            <th>Cliente</th>
            <th>M. pago</th>
            <th>N productos</th>
            <th>subotal</th>
            <th>total</th>
            <!-- <th>Eliminar</th> -->
          </tr>
        </thead>
        <tbody >
          <tr v-for="order in orderAll" :key="order.order_id" >
            <td>{{order.order_id}}</td>
            <td>{{order.detail.client_id}}</td>
            <td>{{order.detail.pay_method}}</td>
            <td>{{order.detail.products.length}}</td>
            
            <td>{{subtotal(order.detail.products)}}</td>
            <td>{{total(order.detail.products)}}</td>
            <!-- <td>
              <button>
                <img src="../assets/eliminar.png" alt="eliminar" />
              </button>
            </td> -->
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import gql from "graphql-tag";

export default {
  name: "pedidos",
  components: {
    Sidebar,
  },
  data() {
    return {
      username: null,
      orderAll: []
    }
  },
  apollo: {
    orderAll: {
      query: gql`
        query Query {
          orderAll {
            order_id
              detail {
              client_id
              pay_method
              products {
                  product_id
                  amount
                  unit_price
                  iva
                  subtotal_price
                  total_price
      }
    }
  }
}
      `,
      variables: {
        username: localStorage.getItem("username"),
      },
    },
  },
 methods: {
   total(productos) {
      let sum=0;
      for (let i=0; i<productos.length;i++){
        sum=sum+productos[i].total_price
      }
      return sum
    },
   subtotal(productos) {
      let sum=0;
      for (let i=0; i<productos.length;i++){
        sum=sum+productos[i].subtotal_price
      }
      return sum
    },
 }
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