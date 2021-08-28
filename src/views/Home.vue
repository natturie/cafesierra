<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div class="formulario">
        <h1 class="tituloInicio">Sierra Café</h1>
        <h3 class="eslogan">De las montañas a tu mesa</h3>
        <router-link to="/login"><button class="btnIngreso"><a>Ingresar</a></button></router-link>
        <router-link to="/signup"><button class="btnRegistro"><a>Registro</a></button></router-link> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style scoped>
.home {
  background: url("../assets/wallpapercafe.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Lexend", sans-serif;
  color: white;  
  height: 100vh;
}


.formulario {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  width: 40%;
  padding: 100px;
}

.tituloInicio {
  font-size: 64px;
}

.eslogan {
  font-size: 24px;
}

.btnIngreso,
.btnRegistro {
  font-size: 22px;
  width: 300px;
  height: 45px;
  background: #306966;
  color: white;
  border-radius: 40px;
  margin: 10px 0;
  border-width: 0;
}
</style>
