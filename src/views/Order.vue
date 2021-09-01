<template>
    <div class="orders">
        <sidebar msg="Pepito" />
        <div class="order-home">
            <div class="verificacion-cliente">
                <h4>Ingrese ID del cliente</h4>
                <input class="input-cliente" type="text" />
                <button class="verificar">></button>
            </div>
            <button class="sincliente"><router-link class="router-bot" to="/">Continuar sin ID</router-link></button>
        </div>
    </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "Order",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.order-home {
  width: 70%;
  position: absolute;
  top: 30%;
  left: 20%;
  font-family: "Lexend", sans-serif;
  
}

h4{
    color: #224957;
    font-size: 26px;
}

.input-cliente {
  border-radius: 5px;
  width: 290px;
  height: 45px;
  margin: 5px 20px;
}

.verificar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 25px;
    color: white;
    background: #224957;
    border: none;
}

.verificacion-cliente {
    text-align: center;
}

.sincliente {
 background: #20DF7F;
  margin: 100px 0 0 600px;
  padding: 8px 16px;
  font-size: 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.router-bot{
text-decoration: none;
color: #224957;
}

</style>