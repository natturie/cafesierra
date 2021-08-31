<template>
  <div class="homelogin">
    <sidebar msg="Pepito" />
    <div class="holacafe">
      <h2>Bienvenido a Sierra Café</h2>
      <div class="imagen-welcome">
        
        <p>
          El grano de la Sierra es cultivado bajo la sombra de árboles nativos
          (como el nogal cafetero y el guamo santafereño) que crecen en el
          llamado ‘Cinturón del café del Caribe’, conformado por cuatro
          municipios del departamento del Magdalena: Aracataca, Santa Marta,
          Ciénaga y Fundación. (El tiempo)
        </p>
        <img src="../assets/cosechando.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "Welcome",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.holacafe {
  width: 60%;
  position: absolute;
  top: 20%;
  left: 30%;
  font-family: "Lexend", sans-serif;
}

.holacafe h2 {
  margin: 15px 0;
  color: rgb(141, 69, 81);
  font-size: 30px;
  margin-left: 150px;
}

.imagen-welcome {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  font-size: 20px;
  text-align: justify;
  margin-top: 40px;
  
}

.imagen-welcome img{
    padding: 0 30px;
}
</style>