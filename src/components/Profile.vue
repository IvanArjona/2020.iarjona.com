<template>
  <section class="profile">
    <h1 class="name">{{ name }}</h1>
    <img class="photo" :alt="longName" src="https://place-hold.it/200">
    <h2 class="title">{{ title }}</h2>
  </section>
</template>

<script>
import { config } from '../data';

export default {
  name: 'Profile',
  data() {
    return {
      name: config.name,
      longName: config.longName,
      title: config.title
    }
  }
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.photo {
  height: 200px;
  width: 200px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .1), 0 1px 6px rgba(0, 0, 0, .2);
  border-radius: 50%;
}
.name {
  font-size: 36px;
  color: #009688;
  margin-top: 0;
  margin-bottom: 25px;
  text-transform: uppercase;
  text-shadow: 1px 1px rgba(0, 0, 0, .2);
  letter-spacing: 1px;
}
.title {
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 0;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
