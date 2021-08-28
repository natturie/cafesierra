<template>
    <div class="menu">

<aside class="side-menu">
    <div >
        <img class="logo" src="../assets/logo.png" alt="logo sierra">
    </div>
    <nav class="navegacion">
        <li><a>Clientes</a></li>
        <li><a>Productos</a></li>
        <li><a>Pedidos</a></li>
    </nav>
    </aside> 
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.side-menu{
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

.logo{
    width: 100px;
    padding: 20px 0;
}

.navegacion li {
    width: 80%;
    border: blueviolet 2px solid;
    list-style: none;
    padding: 10px;
    margin: 20px;

}

</style>