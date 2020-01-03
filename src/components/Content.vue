<template>
  <section>
    <component v-if="selected" :is="selected"/>
    <div class="menu">
      <button class="menu-item" v-for="(menuItem, i) in menu"
          :key="i" @click="showComponent(menuItem.component)">
        {{ menuItem.name }}
      </button>
    </div>
  </section>
</template>

<script>
import Education from './Education';

export default {
  name: 'Content',
  data() {
    return {
      menu: [
        { name: 'Educación', component: 'Education' },
        { name: 'Experiencia', component: 'Experience' },
        { name: 'Aptitudes', component: 'Skills' },
      ],
      selected: 'Education',
    }
  },
  methods: {
    showComponent(component) {
      this.selected = component;
    }
  },
  components: {
    Education
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  color: #009688;
  padding: .4rem;
  margin: .2rem;
  background-color: white;
  border: 2px solid;
  border-radius: 2px;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  cursor: pointer;
  font-weight: bold;
}
</style>
