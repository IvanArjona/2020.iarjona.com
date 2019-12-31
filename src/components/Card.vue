<template>
  <main class="main">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      Content
    </div>
    <Footer/>
  </main>
</template>

<script>
import Footer from './Footer';

export default {
  name: 'Card',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: white;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2);
  & > * {
    padding: 10px;
  }
}
</style>
