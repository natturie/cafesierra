<template>
  <div class="menu">
    <aside class="side-menu">
      <router-link class="router-bot" to="/welcome">
        <img class="logo" src="../assets/logo.png" alt="logo sierra" />
      </router-link>
      <nav class="navegacion">
        <li active-background>
          <router-link class="router-bot" to="/customers">Clientes</router-link>
        </li>
        <li active-background>
          <router-link class="router-bot" to="/products">Productos</router-link>
        </li>
        <li active-background>
          <router-link class="router-bot" to="/order">Facturar</router-link>
        </li>
      </nav>
      <div class="menu-botones">
        <router-link class="router-bot" to="/users"
          ><img class="logo-usuarios" src="../assets/logo-usuarios.png" alt=""
        /></router-link>
        <router-link class="router-bot" to="/pedidos"
          ><img class="logo-pedidos" src="../assets/logo-pedidos.png" alt=""
        /></router-link>
      </div>
    </aside>
    <div class="hola">
      <!-- En este mensaje debería ir el nombre del usuario -->
      <h3>Hola {{ msg }}!</h3>
      <button v-on:click="logout">
        <img src="../assets/logo-logout.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },

  methods: {
    logout() {
      localStorage.clear()
      this.$emit('logout')
      this.$router.push({ name: 'Home' })
    }
  },
  created() {
    this.userId = localStorage.getItem('userId')
  }
};
</script>

<style scoped>
.side-menu {
  background: #224957;
  width: 20%;
  position: fixed;
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
  padding: 20px 0 10px 0;
}

.navegacion li {
  width: 200px;
  /* border: blueviolet 2px solid; */
  border-radius: 8px;
  list-style: none;
  padding: 12px;
  margin: 12px;
  text-align: center;
  font-family: "Lexend", sans-serif;
  font-size: 24px;
  cursor: pointer;
}

.navegacion li router-link{
  width: 100%;
}

.router-bot {
  text-decoration: none;
  color: #ffff;
}

.menu-botones {
margin-top: 190px;
}

.logo-usuarios {
  width: 80px;
  padding-right: 13px;
  cursor: pointer;
}

.logo-pedidos {
  width: 70px;
  padding-left: 13px;
  cursor: pointer;
}

.hola {
  position: absolute;
  position: fixed;
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

/* .hola h3 {
  font-size: 26px;
} */

.hola button {
  padding: 0 5px;
  margin-left: 15px;
  border: none;
  cursor: pointer;
  background: none;
}

.hola img {
  width: 60px;
}

.navegacion a.router-link-exact-active{
background: #20df7f;
border-radius: 8px;
padding: 12px 25px;
}
</style>