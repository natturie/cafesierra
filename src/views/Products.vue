<template>
  <div class="productos">
    <sidebar msg="sidebar" />
    <div class="tabla-product">
        <h3>Productos</h3>
        <button>Nuevo producto</button>
      <table>
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
            <td><button>A</button></td>
            <td><button>B</button></td>
            </tr>

            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td><button>A</button></td>
            <td><button>B</button></td>
            </tr>

            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td><button>A</button></td>
            <td><button>B</button></td>
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
  background: orangered;
  width: 40%;
  
}
</style>