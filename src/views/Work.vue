<template>
  <div class="work">
    <div class="interact">
      <SideMenu :left="true"/>
      <h2>Brandng.</h2>
    </div>
    <div class="content">
      <div class="image"></div>
      <div class="hidden">
        <div class="column"></div>
        <h1>Titulo Mamalon</h1>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue"
export default {
  name: 'Work',
  components:{
    SideMenu
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work{
  width: 100%;
  height: 100%;
  display:flex;
}
.image{
  width: 100%;
  height: 100%;
  background: var(--azul);
}
.hidden{
  
  opacity: 0;
  width: 58%;
  height: 100%;
  position: absolute;;
  top:0;
  background: var(--azul);
  transition: opacity .5s;
}
h1{
  position: absolute;
  text-align: left;
  right:4vw;
  bottom:4vw;
  color: var(--cremita);
  font-size: 7vw;
  margin: 0;
  width: min-content;
}
.hidden:hover{
 opacity: 1;
}
.column{
  width: 21%;
  margin-left:auto;
  height: 100%;
  background: var(--rojo);
}
.interact{
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--azul-obscuro);
} 
h2{ 
  margin-top: auto;
  color: var(--rojo);
  font-size: 5vw;
  }
.content{
  width: 58%;
  height: 100%;
}
</style>
