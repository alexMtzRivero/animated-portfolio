<template>
  <div class="contact">
    <div class="container">
      <h1>Contact me.</h1>
      <p>muda.visualartist@gmail.com</p>
      <p>@alo.muda</p>
      <div class="circle"></div>
    </div>
    <sideMenu position="right" colorClass="cremita" length="long"></sideMenu>
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
.contact{
  width: 100%;
  height:100%;
  background-color: var(--rojo);
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(100% at 50% 0);
  overflow: hidden;
}
.container{
  display: block;
  width: 67%;
  height:67%;
  margin-top:auto;
  margin-left:10vw;
  background: var(--cremita);
  text-align: left;
 
}
h1{
  color: var(--rojo);
  font-size: 6vw;
  margin-left:5vw;
}
p{
  color: var(--rojo);
  font-size: 2vw;
  margin-left:10vw;
}
.circle{
  position:absolute;
  background: var(--rosa);
  width: 7vw;
  height:7vw;
  border-radius: 50%;
  right: 19.5vw;
  bottom: 45%;
}

/// transitions
.Contact-Home-leave-active{
    transition: all var(--anim-st) ease;
}
.Home-Contact-enter{
    clip-path: circle(0% at 20% 80%);
}

.Home-Contact-enter-active{
 transition: all var(--anim-st) ease,
              clip-path var(--anim-st) ease;
}


.Contact-About-leave-active{
    transition: all var(--anim-st) ease;
      .circle{
        transition: all var(--anim-st) ease;
      }
}
.Contact-About-leave-to{
    transition: all var(--anim-st) ease;
    .circle{
      width: 150vw;
      height: 150vw;
      border-radius: 50%;
      right: -25vw;
      bottom: -25vw;
    }
}
.About-Contact-enter-active{
   transition: all var(--anim-st) ease;
   .container{
     transition: height var(--anim-st) ease;
   }
   .circle{
        transition: all var(--anim-st) ease;
      }
}

.About-Contact-enter{
   .container{
     height: 0%;
   }
   .circle{
     width: 0vw;
     height: 0vw;
  }
}
.Contact-WorkMenu-leave-active,
.Contact-About-leave-active{
  transition: all var(--anim-st) ease;
}

</style>
