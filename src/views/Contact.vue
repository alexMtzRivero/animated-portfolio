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
  background: var(--rojo);
  display: flex;
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

</style>
