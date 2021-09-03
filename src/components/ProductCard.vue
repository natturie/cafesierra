<template>
  <div class="card">
    <img class="img-defecto"
      src="https://ellatinoonline.com/wp-content/uploads/2021/07/shutterstock_1387420256-scaled.jpg"
    />
    <h4>{{ product.productName }}</h4>
    <p>{{ productPrice }}</p>

    <input class="stockpro" type="number" v-model="quantity" disabled />
    <button class="sumaruno" v-if="product.stock > quantity" @click="quantity += 1">+</button>
    <button class="restaruno" v-if="quantity > 0" @click="quantity -= 1">-</button>
    <br>
    <button class="add-to-cart" @click="addToCart()" :disabled="quantity === 0">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
      // :to="{ name: 'Product', params: { id: product.id } }"
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  created() {
    console.log(this.product);
  },
  computed: {
    productPrice() {
      return this.product.price + " COP";
    },
  },
  methods: {
    addToCart() {
      let data =  {
        productName: this.product.productName,
        amount: this.quantity,
        product_id: this.product.id,
        price: this.product.price,
        total: this.quantity * this.product.price,
      }

      console.log(data)

      if (typeof(Storage) !== "undefined") {
        let cart = [];
        // Parse the serialized data back into an aray of objects
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Push the new data (whether it be an object or anything else) onto the array
        cart.push(data);
        // Re-serialize the array back into a string and store it in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        console.log("LocalStorage no disponible.")
      }

      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
/* .card:nth-child(3n + 2) {
  margin: 0 5% 10%;
} */
.card {
  width: calc(30% - 2px);
  margin-bottom: 10%;
  border: 1px solid pink;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
}

.stockpro{
  width: 40%;
}

h4{
  color: #224957
}

.add-to-cart{
  margin: 8px 0;
  padding: 3px;
  background: #20df7f;
  color: white;
  cursor: pointer;
}

.img-defecto {
  max-width: 100%;
  height: auto;
}

.sumaruno{
  background: rgb(48, 80, 48);
  color: white;
  cursor: pointer;
}

.restaruno{
  background: rgb(80, 48, 55);
  color: white;
  cursor: pointer;
}
</style>