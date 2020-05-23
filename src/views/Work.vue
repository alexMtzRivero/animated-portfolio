<template>
  <div class="work">
    <div class="interact">
      <SideMenu position="left" colorClass="rojo"/>
      <h2>{{$route.params.type}}</h2>
    </div>
    <div class="content">
      <div class="image">
        <img class="img1" ref="img1" :src="project[branch][index].path" alt=""  @click="nextImage()">
        <img class="img2" ref="img2" :src="project[branch][index2].path" alt="" >
      </div>
      <div class="hidden">
        <div class="column" :style="project[branch][index].colors.background"></div>
        <h1 :style="project[branch][index].colors.header" @click="goto()">{{project[branch][index].header}}</h1>
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
      branch:this.$route.params.type,
      project:{"branding":[
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
                },],
                "ilustracion":[
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
      ],
      },
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
        this.index%= this.project[this.branch].length;
        this.index2+=1;
        this.index2%= this.project[this.branch].length;
        img1.classList.remove('changing');
      }, 500); // the same time as transition animation at css.
      
    },
    goto(){
      this.$router.push({
        name: 'Project',
        params : {  
            project:this.project[this.branch][this.index].header,
            sideMenuColor : this.project[this.branch][this.index].sideMenuColor,
            description : this.project[this.branch][this.index].description,
            images : this.project[this.branch][this.index].images,
            colors : this.project[this.branch][this.index].colors
          }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.work{
  width: 100vw;
  height: 100vh;
  display:flex;
  overflow: hidden;
}
.image{
  width: inherit;
  height: 100%;
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
  top:0;
  clip-path: inset(0 0 0 0);
  position: absolute;
}
.img1{
z-index:1;
}
.img2{
z-index:0;
}
.hidden{ 
  opacity: 0;
  width: 38%;
  height: 100%;
  position: absolute;
  top:0;
  right:0;
  z-index:2;
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
  overflow: hidden;
} 
h2{ 
  text-transform: capitalize;
  margin-top: 80vh;
  color: var(--rojo);
  font-size: 5vw;
  }
.content{
  width: 58vw;
  height: 100%;
  overflow: hidden;
}

.WorkMenu-Work-enter{
    img{
      clip-path: inset(100% 0 0 0);
    }
    h2{
      margin-top:100vh;
    }
}
.WorkMenu-Work-enter-active{
  transition: all var(--anim-st) ease;
  img{
     transition: clip-path var(--anim-st) ease-in-out;
    }
    h2{
      transition: margin-top var(--anim-st) ease
    }
    
}

.Work-WorkMenu-leave-active{
  transition: all var(--anim-st) ease-in;
  img{
     transition: clip-path var(--anim-st) ease-in-out;
    }
  .interact{
    background: transparent;
  }
  h2{
      transition: margin-top var(--anim-st) ease
    }
}

.Work-WorkMenu-leave-to{
   img{
      clip-path: inset(100% 0 0 0);
    }
  h2{
      margin-top:100vh;
    }
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
