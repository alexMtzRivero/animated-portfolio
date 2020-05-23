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
      <SideMenu class="sideMenu" position="right" colorClass="rojo" length="short"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideMenu from "@/components/SideMenu.vue"

export default {
  name: 'Home',
   components:{
    SideMenu
  },
mounted(){
    if(!this.$root.shown){
      this.$router.push('/hello')
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  width: 100%;
  height: 100%;
  display:flex;
  background: var(--azul-obscuro);
  clip-path: circle(130% at 92% 12%);
}
h1{
  cursor: pointer;
  text-align: left;
  font-size: 8vw;
  margin: 1vw 0vw 1vw 1vw;
  color:var(--rojo);
  transition: color var(--anim-st);
  &:hover{
    color:var(--rosa);
  }
}
.container{
  position: absolute;
  right:58vw;
  bottom:5vw;
}

.interact{
  width: 42%;
  height: 100%;
}
.content{
  width: 58%;
  height: 100%;
}
.Hello-Home-enter{
  .container{
    bottom:100vw;
  }
}
.Hello-Home-enter-active {
  .container{
    transition: bottom var(--anim-st) ease;
  }
  clip-path: none;
  transition: all var(--anim-st) ease;
}

.Home-WorkMenu-leave-to{
 h1{
   margin-right: 50vw;
 }
}
.Home-WorkMenu-leave-active{
  transition: all var(--anim-st) ease;
  h1{
  transition: margin-right var(--anim-st)  ease-in;
 }

}

.WorkMenu-Home-enter{
h1{
   margin-right: 50vw;
 }
}
.WorkMenu-Home-enter-active{
  transition: all var(--anim-st) ease;
  h1{
    transition: margin-right var(--anim-st)  ease-out;
  }
}
.Home-Contact-leave-active{
  transition: all var(--anim-st) ease;
 
}
.About-Home-enter{

    clip-path: circle(0% at 92% 12%);
}
.About-Home-enter-active{
    transition: all var(--anim-st) ease;
}

.Contact-Home-enter{
   // background-color: var(--azul-obscuro) ;
    clip-path: circle(0% at 92% 12%);
}
.Contact-Home-enter-active{
    transition: all var(--anim-st) ease;
}
</style>