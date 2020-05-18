<template>
  <div class="project">
    <div class="interact">
      <SideMenu position="left" :colorClass="sideMenuColor" length="short"/>
      <h2>{{ $route.params.project}}</h2>
    </div>
    <div class="content">
      <div class="image">
        <img ref="img2" :src="project[index2].path" alt="" >
        <img ref="img1" :src="project[index].path" alt=""  @click="nextImage()">
      </div>  
    </div>
    <div class="circle"></div>
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
    sideMenuColor:String,
    description:String,
    images:Array,
    colors:Object,
  },
  data(){
    return {
      project:[
        {
          path: require("@/assets/images/tolina.png"),
          header: "Doña Tolina"
        },
         {
          path: require("@/assets/images/olea.png"),
          header: "Olea"
        },
        
      ],
      index:0,
      index2:1,
    }
  },
  methods:{
    nextImage(){
      var img1 = this.$refs.img1;
      img1.classList.add('changing');
        setTimeout(()=>{
        this.index+=1;
        this.index%= this.project.length;
        this.index2+=1;
        this.index2%= this.project.length;
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
  width: 58vw;
  height: 100%;
}
.circle{
  position:absolute;
  background: var(--rojo);
  width: 7vw;
  height:7vw;
  border-radius: 50%;
  left: 38.5vw;
  top: 50%;
}
</style>
