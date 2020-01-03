<template>
  <main class="main">
    <Profile class="profile"/>
    <Info class="info"/>
    <Footer class="footer"/>
  </main>
</template>

<script>
import Profile from './Profile';
import Info from './Info';
import Footer from './Footer';

export default {
  name: 'Card',
  components: {
    Profile,
    Info,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(70px, auto);
  background-color: white;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2);
  & > * {
    padding: 10px;
  }
}
.profile {
  grid-column: 1;
}
.info {
  grid-column: 2 / 4;
}
.footer {
  grid-column: 1 / 4;
}
</style>
