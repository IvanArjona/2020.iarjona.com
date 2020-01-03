<template>
  <section class="profile">
    <img class="photo" :alt="longName" src="https://place-hold.it/200">
    <h1 class="name">{{ name }}</h1>
    <h2 class="title">{{ title }}</h2>
  </section>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      name: 'Iván Arjona',
      longName: 'Iván Arjona Alonso',
      title: 'Full-Stack Web Developer'
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
}
.title {
    font-size: 18px;
}
</style>
