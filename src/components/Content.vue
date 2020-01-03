<template>
  <section>
    <component v-if="selected" :is="selected"/>
    <div class="menu">
      <button class="menu-item" v-for="(menuItem, i) in menu"
          :key="i" @click="showComponent(menuItem.component)"
          :class="{selected: selected === menuItem.component}">
        {{ menuItem.name }}
      </button>
    </div>
  </section>
</template>

<script>
import Education from './Education';
import Experience from './Experience';

export default {
  name: 'Content',
  data() {
    return {
      menu: [
        { name: 'Educación', component: 'Education' },
        { name: 'Experiencia', component: 'Experience' },
        { name: 'Aptitudes', component: 'Skills' },
      ],
      selected: 'Experience',
    }
  },
  methods: {
    showComponent(component) {
      this.selected = component;
    }
  },
  components: {
    Education,
    Experience
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
.selected {
  background: #009688;
  color: #e7fefc;
  border-color: #009688;
}
.menu-item:hover {
  background: #e7fefc;
  &.selected {
    background: #3ac3b6;
  }
}
// .menu-item:hover.selected {
//   background: red;
// }
</style>
