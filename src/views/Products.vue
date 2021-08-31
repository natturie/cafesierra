<template>
  <div class="productos">
    <sidebar msg="Pepito" />
    <div class="tabla-product">
        <h3>Productos</h3>
        <button class="add-product"><router-link class="router-bot" to="/add-product">Agregar producto</router-link></button>
      <table class="product-table">
        <thead>
            <tr>
          <th>Nombre</th>
          <th>Categoria</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Editar</th>
          <th>Elimnar</th>
          </tr>
        </thead>
        <tbody>

            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td><button><img src="../assets/editar.png" alt="editar"></button></td>
            <td><button><img src="../assets/eliminar.png" alt="eliminar"></button></td>
            </tr>

            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td><button><img src="../assets/editar.png" alt="editar"></button></td>
            <td><button><img src="../assets/eliminar.png" alt="eliminar"></button></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "Products",
  components: {
    Sidebar,
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
  color: #20DF7F;
  font-size: 36px;
  margin-left: 35px;
}
.add-product {
  background: #20DF7F;
  margin-left: 35px;
  padding: 5px 14px;
  font-size: 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.router-bot{
text-decoration: none;
color: #224957;
}

.product-table{
  width: 100%;
  margin-top: 40px;
  font-size: 20px;
  color: #224957;
  text-align: center;
}

.product-table thead{
  background: #306966;
  color: white;
}

.product-table button{
  border: none;
  cursor: pointer;
}
</style>