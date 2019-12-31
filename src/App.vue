<template>
  <div id="app">
    <Card/>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Card
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  background-color: black;
  background-image: url("./assets/background.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
	background-size: cover;
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
