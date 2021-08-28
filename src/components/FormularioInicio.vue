<template>
  <div class="formu">
    <h1>{{ msg }}</h1>
    <p>El mejor café del mundo</p>
    <div class="disenio"><img  src="../assets/disenio.png" alt=""></div>
    
  </div>
</template>

<script>
export default {
  name: 'FormularioInicio',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.formu{
 font-family: 'Lexend', sans-serif;;
 color: #224957; 
 text-align: center;
 height: 100vh;
 /* position: relative; */
}

.disenio{
  position: absolute;
  bottom: 0;
  height: auto;
}

h1{
 font-size: 64px;
}

p{
    font-size: 16px;
}


</style>