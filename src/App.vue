<template>
  <div id="app"> 
    <transition :name="transitionName" > 
    <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
    mounted(){
        this.$root.shown = false
    },
    watch: {
    '$route'(to, from) {
        this.transitionName = `${from.name}-${to.name}`
        console.log(this.transitionName,"form wathcer");
    }
    }
}
</script>
<style lang="scss">
:root{
  --rojo: #E7582C;
  --rosa: #DA9CA6;
  --azul-obscuro:#053F4B;
  --azul: #004E75;
  --cremita:#DCD6CF;
  --anim-begin : .5s;
  --anim-st : .5s
}
#app {
  font-family: Elephant;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  background: var(--azul-obscuro);
  overflow: hidden;
}
p{
  font-family: Perpetua;
}
body{
  margin : 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
