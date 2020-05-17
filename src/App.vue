<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
:root{
  --rojo: #E7582C;
  --rosa: #DA9CA6;
  --azul-obscuro:#053F4B;
  --azul: #004E75;
  --cremita:#DCD6CF;
}
#app {
  font-family: Elephant;
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  background: #DA9CA6;
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
