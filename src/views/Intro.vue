<template>
  <div id="introd">  
    <div class="container">
      <h1 class="head step1">Aló!</h1>
      <h1 class="head step2">Aló!</h1>
      <h1 class="head step3">Aló!</h1>
      <h1 class="head step4">Aló!</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'intro',
  mounted(){
      this.$root.shown = true
      setTimeout(()=>{
       this.$router.push("/")
      }, 6*500); // the same time as transition animation at css.
    }
}
</script>
<style scoped lang="scss">
@keyframes enter {
  to{
    opacity: 1;
  }
}
#introd {
  font-family: Elephant;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: var(--rojo);
  background: #DA9CA6;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.container{
  margin:auto;
}

.head{
  color: var(--rojo);
  font-style: italic;
  font-size: 6vw;
  margin: auto;
}

.step1{
  animation: var(--anim-begin) 1 calc(var(--anim-begin)*1) forwards enter ;
 opacity: 0;
}
.step2{
  animation: var(--anim-begin) 1 calc(var(--anim-begin)*2) forwards enter ;
 opacity: 0;
}
.step3{
  animation: var(--anim-begin) 1 calc(var(--anim-begin)*3) forwards enter ;
  opacity: 0;
}
.step4{
  animation: var(--anim-begin) 1 calc(var(--anim-begin)*4) forwards enter ;
 opacity: 0;
}

//transitions
.Hello-Home-leave-active{
   transition: all var(--anim-st) ease;
}
.Hello-Home-leave-to{
   margin-top: 100vh;
}

</style>
