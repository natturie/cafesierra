<template>
  <div class="usuarios">
    <sidebar msg="Pepito" />
    <div class="tabla-user">
      <h3>Usuarios</h3>
      <table class="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Editar</th>
            <th>Elimnar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0000</td>
            <td>pepita</td>
            <td>Pepa</td>
            <td>Perez</td>
            <td>pepita@gmail.com</td>
            <td>
              <button><img src="../assets/editar.png" alt="editar" /></button>
            </td>
            <td>
              <button>
                <img src="../assets/eliminar.png" alt="eliminar" />
              </button>
            </td>
          </tr>
         <tr>
            <td>0000</td>
            <td>pepita</td>
            <td>Pepa</td>
            <td>Perez</td>
            <td>pepita@gmail.com</td>
            <td>
              <button><img src="../assets/editar.png" alt="editar" /></button>
            </td>
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
  name: "Users",
  components: {
    Sidebar,
  },
};
</script>
<style scoped>
.tabla-user {
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

.user-table {
  width: 100%;
  margin-top: 40px;
  font-size: 20px;
  color: #224957;
  text-align: center;
}

.user-table thead {
  background: #306966;
  color: white;
}

.user-table button {
  border: none;
  cursor: pointer;
  background: none;
}
</style>