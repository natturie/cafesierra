<template>
  <div class="signup">
    <formulario-inicio msg="Registro" />
    <div class="capa-signup">
      <div class="flex-signup">
        
        <input type="text" placeholder="nombres" />
        <input type="text" placeholder="username" />
        <input type="text" placeholder="apellidos" />
        <input type="password" placeholder="password" />
        <input type="email" placeholder="email" />
        <!-- <input type="text" placeholder="rol" /> -->
        <!-- <select name="rol" class="rol">
          <option>Cajero</option>
          <option>Administrador</option>
        </select> -->
        
        
        <!-- <input type="password" placeholder="repeat password" /> -->
      </div>
      <div class="signupbtn">
        <button>Registro</button>
      </div>
    </div>
    <router-link to="/"
      ><img class="back-home" src="../assets/home.png" alt="back home"
    /></router-link>
  </div>
</template>

<script>
//  @ is an alias to /src
import FormularioInicio from "../components/FormularioInicio.vue";

export default {
  name: "FormularioSignup",
  components: {
    FormularioInicio,
  },
};
</script>

<style scoped>
.capa-signup {
  width: 50%;
  height: 50%;
  top: 30%;
  left: 25%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center;
	align-content: center; */
  position: absolute;
}

.capa-signup input, .rol {
  background: #224957;
  border-radius: 5px;
  border-style: none;
  width: 290px;
  height: 45px;
  margin: 5px 20px;
}

::placeholder, .rol {
  color: white;
  font-family: "Lexend", sans-serif;
  font-size: 18px;
  padding: 5px 10px;
}


.signupbtn {
  width: 100%;
  margin-left: 170px;
  padding: 10px;
}
.signupbtn button {
  background: #20df7f;
  border-radius: 5px;
  border-style: none;
  width: 250px;
  height: 45px;
  padding: 10px;
  margin: 10px 0;
  color: #224957;
  font-family: "Lexend", sans-serif;
  font-size: 22px;
  cursor: pointer;
}
</style>

