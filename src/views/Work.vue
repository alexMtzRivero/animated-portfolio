<template>
  <div class="work">
    <div class="interact">
      <SideMenu position="left" colorClass="rojo"/>
      <h2>Brandng.</h2>
    </div>
    <div class="content">
      <div class="image">
        <img ref="img2" :src="project[index2].path" alt="" >
        <img ref="img1" :src="project[index].path" alt=""  @click="nextImage()">
      </div>
      <div class="hidden">
        <div class="column" :style="project[index].colors.background"></div>
        <h1 :style="project[index].colors.header" @click="goto()">{{project[index].header}}</h1>
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
  },
  data(){
    return {
      project:[
        {
          path: require("@/assets/images/tolina.png"),
          header: "Doña Tolina",
          description:"Doña Tolina es una marca de mermeladas, salsas y dip inspirada en el folklor mexicano, más específicamente en la talavera, los albures y piropos clásicos de la cultura mexicana.",
          images:[require("@/assets/images/tolina/1.png"),
                  require("@/assets/images/tolina/2.png"),
                  require("@/assets/images/tolina/3.png")],
          colors:{
            header:"color: var(--cremita)",
            headerOpen:"color: var(--rojo)",
            background:"background: var(--rojo)",
            circle:" color : var(--cremita); background: var(--rosa)",
            menu:"cremita",
            box:"color:var(--rojo); background:var(--cremita)"
          },
        },
         {
          path: require("@/assets/images/olea.png"),
          header: "Olea",


          colors:{
            header:"color: var(--azul)",
            headerOpen:"color: var(--rojo)",
            background:"background: var(--cremita)",
            circle:" color : var(--cremita); background: var(--rosa)",
            menu:"cremita",
            box:"color:var(--rojo); background:var(--cremita)"
          }
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
      
    },
    goto(){
      this.$router.push({
        name: 'Project',
        params : {  
            project:this.project[this.index].header,
            sideMenuColor : this.project[this.index].sideMenuColor,
            description : this.project[this.index].description,
            images : this.project[this.index].images,
            colors : this.project[this.index].colors
          }
      });
    }
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
.hidden{ 
  opacity: 0;
  width: 38%;
  height: 100%;
  position: absolute;;
  top:0;
  right:0;
  transition: opacity .5s;
}
h1{
  position: absolute;
  text-align: left;
  right:4vw;
  top: 63vh;
  color: var(--cremita);
  font-size: 7vw;
  margin: 0;
  width: min-content;
}
.hidden:hover{
 opacity: 1;
}
.column{
  width: 12vw;
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
  width: 58vw;
  height: 100%;
}



.Work-Project-leave-active{
   transition: all calc(var(--anim-st)*2) ease;
   .column{
    transition: width var(--anim-st) ease; 
   }
   .hidden{
     opacity: 1;
     transition: width var(--anim-st) ease, 
                 right var(--anim-st) var(--anim-st) ease;
   }
   h1{
       transition: 
                  right var(--anim-st) ease,
                  top var(--anim-st) ease,
                  color var(--anim-st) ease,
                  font-size var(--anim-st) ease,
                  margin var(--anim-st) ease,
                  width var(--anim-st) ease;
    }
}
.Work-Project-leave-to{
   margin-top: 1vh;
   .column{
     width:100%
   }
   .hidden{
     opacity: 1;
     width: 100%;
     right:58vw;
   }
   h1{
        text-align: center;
        // right: 64.5vw;
        top: 78vh;
        color: var(--cremita);
        font-size: 5vw;
        margin: 0;
        width: 30vw;
        white-space: nowrap;
    }
}
</style>
