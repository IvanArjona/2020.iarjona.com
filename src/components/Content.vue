<template>
  <section class="content">
    <transition name="component-fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <div class="menu">
      <router-link tag="button" v-for="(menuItem, i) in menu"
          :key="i" :to="menuItem.route" class="menu-item"
          :class="{ 'router-link-active': menuItem.route === 'education' && $router.currentRoute.path === '/' }">
        {{ menuItem.name }}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      menu: [
        { name: 'Educación', route: 'education' },
        { name: 'Experiencia', route: 'experience' },
        { name: 'Aptitudes', route: 'skills' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
.view {
  flex: 1;
}
@media (min-width: 650px) {
  .view {
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
.router-link-active {
  background: #009688;
  color: #e7fefc;
  border-color: #009688;
}
.menu-item:hover {
  background: #e7fefc;
  &.router-link-active {
    background: #3ac3b6;
  }
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
