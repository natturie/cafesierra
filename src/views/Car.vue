<template>
  <div class="carrito">
    <sidebar msg="Pepito" />
    <div class="factura">
        <!-- <h3>Productos</h3>
      <button class="add-product">
        <router-link class="router-bot" to="/products/add"
          >Agregar producto</router-link
        >
      </button> -->
        <div>
      <table class="product-table" v-if="cart.length > 0">
        <thead>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Método de pago</th>
          <th>Eliminar</th>
        </thead>
        <tbody>
          <tr v-for="product in cart" :key="product.product_id">
            <td>{{ product.productName }}</td>
            <td>
              <input class="stockpro" v-model="product.amount" />
              <button class="sumaruno" @click="editQuantity(product.product_id, '+')">+</button>
              <button class="restaruno" @click="editQuantity(product.product_id, '-')">-</button>
            </td>
            <td>{{ product.total }}</td>
            <td>Efectivo</td>
            <td>
              <button v-on:click="productDelete(product.product_id)">
                <img src="../assets/eliminar.png" alt="eliminar" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Total <span>Total factura</span></h3>
      <button class="pay-products">Pagar</button>
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
      cart: null
    };
  },
  created() {
    this.productId = this.$route.params.id;
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
  },
  methods: {
    editQuantity(id, operator) {
      if (typeof(Storage) !== "undefined") {
        let cart = [];
        // Parse the serialized data back into an aray of objects
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Edit element
        for (let index = 0; index < cart.length; index++) {
          if (cart[index].product_id === id) {
            switch (operator) {
              case '+':
                cart[index].amount = cart[index].amount + 1;
                cart[index].total = cart[index].price * cart[index].amount
                break;
              case '-':
                cart[index].amount = cart[index].amount - 1;
                cart[index].total = cart[index].price * cart[index].amount

                if (cart[index].amount === 0) {
                  cart = cart.filter(item => {
                    return item.product_id !== id
                  });
                }
                break;
              default:
                break;
            }
          }
        }
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        console.log("LocalStorage no disponible.")
      }
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    productDelete(id) {
      if (typeof(Storage) !== "undefined") {
        let cart = [];
        // Parse the serialized data back into an aray of objects
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Delete element
        cart = cart.filter(item => {
          return item.product_id !== id
        });
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        console.log("LocalStorage no disponible.")
      }
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    }
  }
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

.pay-products{
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
  .stockpro{
    width: 20%;
    height: 1.5em;
    text-align: center;
  }
  .sumaruno{
    background: rgb(48, 80, 48) !important;
    color: white;
    cursor: pointer;
    margin: 0.5em;
    height: 1.5em;
    width: 1.5em;
    border-radius: 3px; 
  }
  .restaruno{
    background: rgb(80, 48, 55) !important;
    color: white;
    cursor: pointer;
    margin: 0.5em;
    height: 1.5em;
    width: 1.5em;
    border-radius: 3px; 
  }
</style>