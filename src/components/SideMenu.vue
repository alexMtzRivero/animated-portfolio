<template>
  <div class="sideMenu">
    <div :class='`${position} ${colorClass} ${length}`'>
      <router-link tag="h1" to="/"  class="header">ü</router-link>
      <div class="space"></div>
      <router-link v-show='$route.path != "/contact"' tag="h2" to="/contact"  class="header">CONTACT</router-link>
      <router-link v-show='$route.path != "/about"' tag="h2" to="/about"  class="header">ABOUT</router-link>
      <router-link v-show='!$route.path.includes("/work")' tag="h2" to="/work"  class="header">WORK</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    //lado en el que va a aparecer el menu
    position: String,
    colorClass: String,
    length:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1{
  margin :0;
  margin-bottom: 3%;
  cursor: pointer;
  transition: color var(--anim-st) ease;
}
.space{
  display:none;
}
.short{
  h2{
    display: none;
  }
}
.long{
  .space{
    display:inline-block;
    width:2px;
    height:30vh;
  }
}
.sideMenu{
  text-align: center;
}
h2{
  cursor: pointer;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  font-family: "Glacial Indifference";
  font-size: 1.5vw;
  margin: 3vw auto;
}

.right{
    font-size: 3vw;
    position: absolute;
    top:2vw;
    right:6vw;
    margin: 0;
    
}
.left{
    font-size: 3vw;
    position: absolute;
    top:2vw;
    left:6vw;
    margin: 0;
    h2{
      transform: scale(-1,-1);
    }
}
.cremita{
color: var(--cremita);
  .space{
    background:var(--cremita);
  }
}
.rojo{
  color: var(--rojo);
  .space{
    background:var(--cremita);
  }
}

//transitions
.Hello-Home-enter{
  .right{
     top:-10vw;
  }
}
.Hello-Home-enter-active {
  .right{
   transition: top var(--anim-st) ease;
  }
  transition: all var(--anim-st) ease;
}


.Work-WorkMenu-leave-active{
  .left{
   transition: left var(--anim-st) ease;
  }
  transition: all var(--anim-st) ease;
}
.Work-WorkMenu-leave-to{
  .left{
      left:-10vw;
    }
}

.WorkMenu-Work-enter{
    .left{
      left:-10vw;
    }
}

.WorkMenu-Work-enter-active {
  .left{
   transition: left var(--anim-st) ease;
  }
  transition: all var(--anim-st) ease;
}

.WorkMenu-Work-leave-to{
    .right{
      right :-10vw;
    }
  }
.WorkMenu-Work-leave-active {
  .right {
   transition: right var(--anim-st) ease;
  }
  transition: all var(--anim-st) ease;
}


.Work-WorkMenu-enter-active{
  .right{
   transition: right var(--anim-st) ease;
  }
  transition: all var(--anim-st) ease;
}
.Work-WorkMenu-enter{
  .right{
      right:-10vw;
    }
}



</style>
