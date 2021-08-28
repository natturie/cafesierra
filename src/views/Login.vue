<template>
  <div class="login">
    <formulario-inicio msg="Ingresar"/> 
    <div class="capa-login">
        <input class="input-form" type="email" placeholder="email" >
        <input type="password" placeholder="password" >
        <button>Login</button>
    </div>
    <router-link to="/"><img class="back-home" src="../assets/home.png" alt="back home"></router-link>
  </div>
</template>

<script>
//  @ is an alias to /src
import FormularioInicio from '../components/FormularioInicio.vue'

 export default {
   name: 'FormularioLogin',
   components: {
     FormularioInicio
   }
 }
</script>

<style>
.capa-login{
  width: 100%;
  top: 38%; 
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
  position: absolute;
}

.capa-login input{
  background: #224957;
  border-radius: 5px;
  border-style: none;
  width: 290px;
  height: 45px;
  margin: 10px 0;
}

::placeholder { 
  color: white; 
  font-family: "Lexend", sans-serif;
  font-size: 18px;
  padding: 5px 10px;
  }


  .capa-login button{
    background: #20DF7F;
    border-radius: 5px;
    border-style: none;
    width: 290px;
    height: 45px;
    padding: 10px;
    margin: 10px 0;
    color: #224957;
    font-family: "Lexend", sans-serif;
    font-size: 22px;
    cursor: pointer;
  }

  .back-home{
    position: absolute;
    width: 7%;
    top: 1px;
    margin: 20px;
    cursor: pointer;
  }
</style>


      