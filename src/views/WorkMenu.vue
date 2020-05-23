<template>
  <div class="workMenu">
    <div class="interact">
      <div class="container">
        <router-link :class="selected==1?'selected':'not-selected'" @click="selected=1" tag="h1" to="/work/branding"  class="header">Branding.</router-link>
        <router-link :class="selected==2?'selected':'not-selected'" @click="selected=2" tag="h1" to="/work/ilustracion"  class="header">Ilustracion</router-link>
      </div>
    </div>
    <div class="content">
      <SideMenu position="right" colorClass="rojo" length="short"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideMenu from "@/components/SideMenu.vue"

export default {
  name: 'WorkMenu',
   components:{
    SideMenu
  },
  data(){
    return {
      selected:0
    }
  }
}
</script>

<style scoped lang="scss">
.workMenu{
  width: 100vw;
  height: 100%;
  display:flex;
  position:absolute;
  top:0;
  left:0;
  clip-path: inset(0 0 0% 0%);
}
h1{
  cursor: pointer;
  text-align: left;
  font-size: 5vw;
  margin: 1vw 0vw 1vw 1vw;
  color:var(--rojo);
  transition: color var(--anim-st);
  &:hover{
    color:var(--rosa);
  }
}
.container{
 margin-top: auto;
 text-align: right;
 margin-left: 7vw;
 margin-bottom: 7vw;
}

.interact{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.content{
  width: 58%;
  height: 100%;
}

/// transitions

.Home-WorkMenu-enter{
  .container{
    margin-left: -50vw;
  }
  
}
.Home-WorkMenu-enter-active {
  .container{
    transition: margin-left var(--anim-st) ease-out;
  }
  
  transition: all var(--anim-st) ease;
}


.Work-WorkMenu-enter{
  .container{
   margin-bottom: -50vh;
 }
  h1{
    font-size: 5vw
  } 
  
}
.Work-WorkMenu-enter-active{
  .container{
      transition: margin-bottom var(--anim-st) ease ;          
  }
  h1{
      transition:  font-size var(--anim-st) ease ;
  }

   transition: all var(--anim-st) ease;
}

.WorkMenu-Work-leave-to{
 .container{
   margin-bottom: -50vh;
 }
  h1{
    font-size: 5vw
  } 
  
}
.WorkMenu-Work-leave-active{
  transition: all var(--anim-st) ease;
  .container{
      transition: margin-bottom var(--anim-st) ease ;          
  }
  h1{
      transition:  font-size var(--anim-st) ease ;
  }
 
}

.WorkMenu-Home-leave-active {
  transition: all var(--anim-st) ease;
  .container{
    transition: margin-left var(--anim-st) ease-in;
  }
}
.WorkMenu-Home-leave-to{
  .container{
    margin-left: -50vw;
  }
}
.About-WorkMenu-enter-active{
  transition: clip-path var(--anim-st) ease-in;
}
.About-WorkMenu-enter-to{
  background: var(--azul-obscuro);
}
.About-WorkMenu-enter{
  clip-path: inset(0 0 0% 100%);
}

.Contact-WorkMenu-enter-active{
  transition: clip-path var(--anim-st) ease-in;
}
.Contact-WorkMenu-enter-to{
  background: var(--azul-obscuro);
}
.Contact-WorkMenu-enter{
  clip-path: inset(0 0 0% 100%);
}



</style>