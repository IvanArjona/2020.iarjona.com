<template>
  <section class="content">
    <component class="shown" v-if="selected" :is="selected"/>
    <div class="menu">
      <button class="menu-item" v-for="(menuItem, i) in menu"
          :key="i" @mousedown="showComponent(menuItem.component)"
          :class="{selected: selected === menuItem.component}">
        {{ menuItem.name }}
      </button>
    </div>
  </section>
</template>

<script>
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

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
    Education,
    Experience,
    Skills
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
.shown {
  flex: 1;
}
@media (min-width: 650px) {
  .shown {
    min-height: 380px;
  }
}
.menu {
  margin-top: .5rem;
  flex-shrink: 1;
}
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
</style>
