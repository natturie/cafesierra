<template>
  <div class="check-order">
    <sidebar msg="Pepito" />
    <div class="select-product">
      <h3 class="titulo1">Facturar</h3>
      <h4 class="titulo2">Seleccionar medio de pago</h4>
      <select class="select-pago" name="medioPago">
        <option>Efectivo</option>
        <option>Crédito</option>
      </select>
      <h4 class="titulo2">Seleccionar Productos</h4>
      <router-link to="/order/car">
      <button class="ir-carrito"><img src="../assets/carrito.png" alt=""></button>
      </router-link>
      <section v-if="products.length > 0" class="products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add="addToCart($event)"
        />
      </section>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import ProductCard from '@/components/ProductCard'

export default {
  name: "Checkorder",
  components: {
    Sidebar,
    ProductCard
  },
  data() {
    //   return {
    //     username: null,
    //     productAll: [],
    //   };
    // },
    return {
      products: [
        {
          id: "fasdfasdf",
          name: "Producto 1",
          price: 25000,
          limit: 40,
        },
        {
          id: "t34t4rgr",
          name: "Producto 2",
          price: 75000,
          limit: 4,
        },
        {
          id: "jghj67jg",
          name: "Producto 3",
          price: 215000,
          limit: 10,
        },
        {
          id: "65thfghfgh",
          name: "Producto 4",
          price: 15000,
          limit: 20,
        },
        {
          id: "lkd45t4oi5",
          name: "Producto 5",
          price: 5000,
          limit: 3,
        },
        {
          id: "gsdfigsoij43",
          name: "Producto 6",
          price: 35000,
          limit: 8,
        },
      ],
      cart: [],
    };
  },
  beforeCreate() {
    console.log(2);
  },
  created() {
    console.log("Hola");
  },
  methods: {
    addToCart(data) {
      console.log(data);
      this.cart.push(data);
    },
  },
};
</script>

<style scoped>
.select-product {
  width: 70%;
  position: absolute;
  top: 18%;
  left: 25%;
  font-family: "Lexend", sans-serif;
}

.titulo1 {
  color: #20df7f;
  font-size: 36px;
  margin-left: 35px;
}

.titulo2 {
  color: #224957;
  font-size: 23px;
}

.select-pago {
  padding: 10px;
  margin-top: -20px;
  cursor: pointer;
}

.products-grid {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding: 40px 10%;
  width: 100%;
  box-sizing: border-box; */

  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
  padding: 40px 10%;
}

.ir-carrito{
  background: none;
  border: none;
  cursor: pointer;
  position: fixed;
  right: 3%;
  top: 40%;
}
</style>