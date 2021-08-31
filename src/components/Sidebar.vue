<template>
  <div class="menu">
    <aside class="side-menu">
      <div>
        <img class="logo" src="../assets/logo.png" alt="logo sierra" />
      </div>
      <nav class="navegacion">
        <li><router-link class="router-bot" to="/costumers">Clientes</router-link></li>
        <li><router-link class="router-bot" to="/products">Productos</router-link></li>
        <li><router-link class="router-bot" to="/invoice">Facturar</router-link></li>
      </nav>
      <div class="menu-botones">
        <router-link class="router-bot" to="/users"><img class="logo-usuarios" src="../assets/logo-usuarios.png" alt="" /></router-link>
        <router-link class="router-bot" to="/pedidos"><img class="logo-pedidos" src="../assets/logo-pedidos.png" alt="" /></router-link>
      </div>
    </aside>
    <div class="hola">
      <!-- En este mensaje debería ir el nombre del usuario -->
      <h2>Hola {{ msg }}!</h2>
      <button><img src="../assets/logo-logout.png" alt="" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

.side-menu {
  background: #224957;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}

.logo {
  width: 100px;
  padding: 20px 0;
}

.navegacion li {
  width: 200px;
  border: blueviolet 2px solid;
  border-radius: 8px;
  list-style: none;
  padding: 10px;
  margin: 20px;
  text-align: center;
  font-family: "Lexend", sans-serif;
  font-size: 26px;
  cursor: pointer;
}

.router-bot{
text-decoration: none;
color: #ffff;
}

.menu-botones {
  margin-top: 120px;
}


.logo-usuarios {
  width: 100px;
  padding-right: 13px;
  cursor: pointer;
}

.logo-pedidos {
  width: 90px;
  padding-left: 13px;
  cursor: pointer;

}

.hola {
  position: absolute;
  top: 30px;
  right: 30px;
  /* width: 20%; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Lexend", sans-serif;
  font-size: 26px;
  color: #224957;
}

.hola button{
 border: none;
 cursor: pointer;
 margin-left: 25px;
}

.hola img {
  width: 70px;
}
</style>