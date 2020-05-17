<template>
  <div class="sideMenu">
    <div :class='(left)?"left" : "right"'>
      <router-link tag="h1" to="/"  class="header">ü</router-link>
      <router-link tag="h2" to="/contact"  class="header">CONTACT</router-link>
      <router-link tag="h2" to="/about"  class="header">ABOUT</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    //lado en el que va a aparecer el menu
    left: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  margin :0;
  margin-bottom: 3vw;
  cursor: pointer;
}
.sideMenu{
  text-align: center;
}
h2{
  cursor: pointer;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  font-family: "Glacial Indifference";
  font-size: 1.5vw;
  margin: 3vw auto;
}

.right{
    font-size: 3vw;
    position: absolute;
    top:2vw;
    right:6vw;
    margin: 0;
    color: var(--rojo);
    
}
.left{
    font-size: 3vw;
    position: absolute;
    top:2vw;
    left:6vw;
    margin: 0;
    color: var(--rojo);
    h2{
      transform: scale(-1,-1);
    }
}

</style>
