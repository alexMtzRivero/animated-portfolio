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
  clip-path: circle(115% at 20% 30%);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
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
  height:67vh;
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
.About-Home-leave-active{
    transition: all var(--anim-st) ease;
}
.Home-About-enter{
    clip-path: circle(0% at 20% 30%);
}

.Home-About-enter-active{
 transition: all var(--anim-st) ease,
              clip-path var(--anim-st) ease;
}

.Contact-About-enter-active{
  transition: all calc(var(--anim-st)*2) ease;
  .square{
   transition: height var(--anim-st) ease-in-out,
  }
  .img-container{
    transition: left var(--anim-st)  ease-out,
  }
  .circle{
    transition: all var(--anim-st) var(--anim-st) ease;
  }
  .container{
     transition: height var(--anim-st) ease-out;
  }
  h1{
   transition: opacity var(--anim-st) ease-out;
  }
}
.Contact-About-enter{
  .square{
    height: 0vh;
  }
  .img-container{
    left: -23vw;
  }
  .circle{
     width: 0vw;
     height: 0vw;
  }
  .container{
    height: 100vh;
  }
  h1{
    opacity: 0;
  }
}

.About-Contact-leave-to{
.circle{
      width: 150vw;
      height: 150vw;
      border-radius: 50%;
      left: -25vw;
      top: -25vw;
    }
}
.About-Contact-leave-active{
  transition: all var(--anim-st) ease;
  .circle{
        transition: all var(--anim-st) ease;
      }
}
.About-WorkMenu-leave-active{
  transition: all var(--anim-st) ease;
}

</style>