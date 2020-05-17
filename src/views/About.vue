<template>
  <div class="about">
    <div class="img-container">
      <img src="@/assets/images/sheyla.png" alt="">
    </div>
   <div class="container">
      <h1>About me.</h1>
      <div class="square">
        <p>MÜDA 
          <br><br>
          Muda es un estudio de ilustración y diseño gráfico con sede en Chihuahua, Chih. México. 
          <br> <br>
          El estudio debe su nombre a la definición de la palabra homofóna "muda" que hace alusión al cambio de apariencia que tiene un animal, persona o ser y a su vez, al lenguaje no hablado haciendo referencia en ambos, a la comunicación gráfica.</p>
      </div>
      <div class="circle"></div>
    </div>
    <sideMenu position="right" colorClass="rojo" length="long"></sideMenu>
  </div>
</template>
<script>
import SideMenu from "@/components/SideMenu.vue"
export default {
  name: 'Work',
  components:{
    SideMenu
  }
}
</script>
<style scoped lang="scss">
.about{
  width: 100%;
  height:100%;
  background: var(--rosa);
  display: flex;
}
.img-container{
  width:23vw;
  height: 32vw;
  background: var(--cremita);
  position: absolute;
  left:10vw;
  top:7vw;
}
.container{
  display: flex;
  width: 55%;
  height:85vh;
  margin-top:auto;
  margin-left:27vw;
  text-align: left;
  flex-direction: column;
}
h1{
  color: var(--cremita);
  font-size: 4vw;
  margin-left:10vw;
}
.square{
  margin-top:auto;
  width: 100%;
  height:67vw;
  background: var(--rojo);
  display: flex;
}
img{
  width:100%;
  height:100%;
}
p{
  color: var(--cremita);
  margin:auto;
  font-size: 2vw;
  width: 65%;
}
.circle{
  position:absolute;
  background: var(--rojo);
  width: 7vw;
  height:7vw;
  border-radius: 50%;
  left: 6.5vw;
  top: 17%;
}

</style>