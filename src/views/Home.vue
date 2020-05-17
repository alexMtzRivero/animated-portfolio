<template>
  <div class="home">
    <div class="interact">
      <div class="container">
        <router-link tag="h1" to="/about"  class="header">About.</router-link>
        <router-link tag="h1" to="/work"  class="header">Work.</router-link>
        <router-link tag="h1" to="/contact"  class="header">Contact.</router-link>
      </div>
     
    </div>
    <div class="content">
      <h1 class="logo-right">ü</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
.home{
  width: 100%;
  height: 100%;
  display:flex;
  background: var(--azul-obscuro);
}
h1{
  cursor: pointer;
  text-align: left;
  font-size: 8vw;
  margin: 1vw 0vw 1vw 1vw;
  color:var(--rojo);
}
.container{
  position: absolute;
  right:58vw;
  bottom:5vw;
}
.logo-right{
  font-size: 8vw;
  position: absolute;
  top:3vw;
  right:6vw;
  margin: 0;
}
.interact{
  width: 42%;
  height: 100%;
}
.content{
  width: 58%;
  height: 100%;
}
</style>