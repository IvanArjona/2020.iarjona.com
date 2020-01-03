<template>
  <a :href="social.href" target="_blank">
    <div class="icon-cnt" :title="social.name">
      <font-awesome-icon class="icon" :icon="social.icon" :label="social.name" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    social: Object
  }
}
</script>

<style lang="scss" scoped>
.icon-cnt {
  height: 50px;
  width: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.icon-cnt:hover {
  background-color: white;
  color: #009688;
  transition: all .5s ease-in;
}
.icon {
  height: 25px;
  width: 25px;
}
</style>
