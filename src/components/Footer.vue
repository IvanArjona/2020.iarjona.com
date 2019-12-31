<template>
  <footer class="footer">
      <FooterIcon :social="social" v-for="(social, i) in socials" :key="i"/>
  </footer>
</template>

<script>
import FooterIcon from './FooterIcon';

export default {
  name: 'Footer',
  data() {
    return {
      socials: [
        { name: 'LinkedIn', icon: ['fab', 'linkedin-in'], href: 'https://www.linkedin.com/in/ivan-arjona/' },
        { name: 'GitHub', icon: ['fab', 'github'], href: 'https://github.com/IvanArjona' },
        { name: 'GitLab', icon: ['fab', 'gitlab'], href: 'https://gitlab.com/Ivanyn' },
        { name: 'Facebook', icon: ['fab', 'facebook'], href: 'https://www.facebook.com/Ivanyn' },
        { name: 'Telegram', icon: ['fab', 'telegram-plane'], href: 'https://t.me/Ivanyn' },
        { name: 'Email', icon: ['fa', 'envelope'], href: 'mailto:ivanarjonaalonso@gmail.com' },
      ]
    }
  },
  components: {
    FooterIcon
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 8px;
  background-color: #009688;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
