<template>
  <div class="agregarprod">
      <sidebar msg="Pepito" />
    <div class="form-agregarprod">
        <h2>Producto nuevo</h2>
      <div class="flex-signup">
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="categoria" />
        <input type="text" placeholder="cantidad" />
        <input type="string" placeholder="precio" />
      </div>
      <div class="addbtn">
        <router-link to="/products"><button>Agregar producto</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "EditProduct",
  components: {
    Sidebar,
  },
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
