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
  background-color: white;
  background-image: url("./assets/background.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
	background-size: cover;
  height: 100%;
  margin: 0;
}
.no-webp body {
  background-image: url("./assets/background.png");
}
#app {
  font-family: 'Nunito', 'Avenir', Helvetica, Arial, sans-serif;
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
.bold {
  font-weight: bold;
}
.section-title {
  margin: .5rem;
}
</style>
