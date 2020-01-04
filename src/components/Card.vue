<template>
  <main class="main">
    <Profile class="profile"/>
    <Content class="content"/>
    <Footer class="footer"/>
  </main>
</template>

<script>
import Profile from './Profile';
import Content from './Content';
import Footer from './Footer';

export default {
  name: 'Card',
  components: {
    Profile,
    Content,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@keyframes slideIn {
  0% {
    transform: translateY(200%);
  }
  100% {
    transform: translateX(0);
  }
}
.main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(70px, auto);
  background-color: white;
  margin: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .2);
  animation: 1.5s ease-out 0s 1 slideIn;
}
.profile {
  grid-column: 1;
  padding: 30px;
}
.content {
  grid-column: 2 / 4;
  padding: 30px;
  padding-bottom: 10px;
}
.footer {
  grid-column: 1 / 4;
  padding: 10px;
}
@media (max-width: 650px) {
  .main {
    margin-top: 175px;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    & > * {
      grid-column: 1;
    }
  }
}
</style>
