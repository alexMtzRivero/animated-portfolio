<template>
  <div class="project">
    <div class="interact" :style="colors.background">
      <SideMenu position="left" :colorClass="colors.menu" length="short"/>
      <div :class="` info ${shown?'shown':''}`" :style="shown?colors.box:''">
        <h2 :style="shown?colors.headerOpen:colors.header">{{ $route.params.project}}</h2>
        <p :style="shown?colors.headerOpen:colors.header" >{{description}}</p>
        <div class="circle" @click="shown = !shown" :style="colors.circle">
            <h3>
           {{shown?" x ":"more ..."}}
           </h3> 
        </div>
      </div>
    </div>
    <div class="content">
      <div class="image">
        <img ref="img2" :src="images[index2]" alt="" >
        <img ref="img1" :src="images[index]" alt=""  @click="nextImage()">
      </div>  
    </div>
    
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue"
export default {
  name: 'Project',
  components:{
    SideMenu
  },
  props: {
    description:String,
    images:Array,
    colors:Object,
  },
  data(){
    return {
      index:0,
      index2:1,
      shown: false,
    }
  },
  methods:{
    nextImage(){
      var img1 = this.$refs.img1;
      img1.classList.add('changing');
        setTimeout(()=>{
        this.index+=1;
        this.index%= this.images.length;
        this.index2+=1;
        this.index2%= this.images.length;
        img1.classList.remove('changing');
      }, 500); // the same time as transition animation at css.
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.project{
  width: 100%;
  height: 100%;
  display:flex;
}
.image{
  width: inherit;
  height: 100%;
  background: var(--azul);
  transition: opacity .5s;
}
.changing{
  opacity:0;
  transition: opacity .5s;
}
img{
  width: inherit;
  height:100%;
  right:0;
  position: absolute;
}
h3{
    position: absolute;
    white-space: nowrap;
    right: 30px;
    margin:50% 0;
    font-size: 2vw;
    opacity:0;
    transition: opacity .2s;
}
.interact{
  width: 42%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--azul-obscuro);
} 

.content{
  width: 58vw;
  height: 100%;
}
.info{
  margin-top: auto;
  z-index: 10;
  height: 22vh;
  width: 100%;
  transition: background-color .2s ,
              margin-left .5s .5s,
              width .5s .5s ,
              height .5s;
}
p{
  display: none;
  height: 0;

}
h2{ 
  margin-top: auto;
  color: var(--rojo);
  font-size: 5vw;
  }
.circle{
  position:absolute;
  display: flex;
  background: var(--rojo);
  width: 7vw;
  height:7vw;
  border-radius: 50%;
  left: 38.5vw;
  top: 50%;
  z-index: 20;
  transition: left .5s .5s;
}
.circle:hover{
  h3{
    opacity:1;
  }
}
.shown{
  background: var(--rosa);
  width: 61vw;
  margin-left: 6vw;
  height: 60%;

    h3{
      position: relative;
      font-size: 4vw;
      margin: auto;
      right: auto;
    }
    circle:hover{
      h3{
        font-size: 4.5vw;
      }
    }
  p{
      display: block;
      color: var(--cremita);
      margin:auto;
      font-size: 2vw;
      width: 65%;
      text-align: left;
    }
    h2{ 
      margin: 2vw 0;
      color: var(--rojo);
      font-size: 5vw;
      }
    .circle{
      position:absolute;
      background: var(--rojo);
      width: 7vw;
      height:7vw;
      border-radius: 50%;
      left: 63.5vw;
      top: 50%;
      z-index: 20;
      align-items: center
    }
}
//estilos de comienso
.Work-Project-enter{
  .project{
    position: absolute;
    top:0
  }
  img{
    
    height:100%;
    top:0;
    right:0;
    position: absolute;
  }
}
//tiempos de animaciones
.Work-Project-enter-active {
  .project{
    position: absolute;
    top:0
  }
  
}
</style>
