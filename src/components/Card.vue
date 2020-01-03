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
  margin: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2);
}
.profile {
  grid-column: 1;
  padding: 30px;
}
.info {
  grid-column: 2 / 4;
  padding: 30px;
}
.footer {
  grid-column: 1 / 4;
  padding: 10px;
}
@media (max-width: 650px) {
  .main {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    & > * {
      grid-column: 1;
    }
  }
}
</style>
