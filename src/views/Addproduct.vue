<template>
  <div class="agregarprod">
      <sidebar msg="Pepito" />
    <div class="form-agregarprod">
        <h2>Producto nuevo</h2>
      <form class="flex-signup" @submit.prevent="productAdd">
        <input type="text" placeholder="nombre" v-model="productName"/>
        <input type="text" placeholder="categoria" v-model="category" />
        <input type="number" placeholder="cantidad" v-model="stock" />
        <input type="string" placeholder="precio" v-model="price"/>
        <div class="addbtn">
          <button  type="submit">Agregar producto</button>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import gql from "graphql-tag";

export default {
  name: "Addproduct",
  components: {
    Sidebar,
  },

  data() {
    return {
      productName: '',
      category: '',
      stock: 0,
      price: ''
    }
  },

  methods: {
    async productAdd() {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ProductAddMutation($productAddProductAdd: ProductAddInput!) {
            productAdd(productAdd: $productAddProductAdd) {
              Status
            }
          }`,
        variables: {
          productAddProductAdd: {
            productName: this.productName,
            category: this.category,
            stock: this.stock,
            price: this.price
          }
        },
        
      })
      .then(result => {
        alert('producto creado exitosamente!')
        console.log(result)
        this.customers(result)
      })
      .catch((e) => {
        alert('No se pudo crear el producto')
        console.log(e);
      })
    },
    customers(result) {
      console.log(result)
      this.$router.push({ name: 'Products' })
    }
  }
};
</script>

<style scoped>
.form-agregarprod {
  width: 50%;
  height: 50%;
  top: 30%;
  left: 30%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center;
	align-content: center; */
  position: absolute;
  font-family: "Lexend", sans-serif;
}

.form-agregarprod h2{
    margin-bottom: 40px;
    font-size: 28px;
    color: #224957;
}

.form-agregarprod input {
  border-radius: 5px;
  width: 290px;
  height: 45px;
  margin: 5px 20px;
}

::placeholder {
  font-size: 18px;
  padding: 5px 10px;
}


.addbtn {
  width: 100%;
  margin-left: 170px;
  padding: 10px;
}
.addbtn button {
  background: #20df7f;
  border-radius: 5px;
  border-style: none;
  width: 250px;
  height: 45px;
  padding: 10px;
  margin: 10px 0;
  color: #224957;
  font-size: 22px;
  cursor: pointer;
}
</style>
