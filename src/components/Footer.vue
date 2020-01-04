<template>
  <footer class="footer">
      <FooterIcon :social="social" v-for="(social, i) in socials" :key="i"/>
  </footer>
</template>

<script>
import FooterIcon from './FooterIcon';
import { socials } from '../data';

export default {
  name: 'Footer',
  data() {
    return {
      socials: socials
    }
  },
  components: {
    FooterIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #009688;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
