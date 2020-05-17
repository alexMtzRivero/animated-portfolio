<template>
  <div class="base">
    <div class="interact"></div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'Base',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.base{
  width: 100%;
  height: 100%;
  display:flex;
}
.interact{
  width: 42%;
  height: 100%;
}
.content{
  width: 58%;
  height: 100%;
}
</style>
