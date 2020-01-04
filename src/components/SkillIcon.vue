<template>
  <a :href="skill.link" target="_blank" :title="skill.name">
    <img class="icon" :src="skill.icon" :alt="skill.name">
  </a>
</template>

<script>
export default {
  name: 'SkillIcon',
  props: {
    skill: Object
  }
}
</script>

<style lang="scss" scoped>
.icon {
  height: 32px;
  margin: 5px;
}
.icon:hover {
  transition: transform 1s;
  transform: scale(1.5);
}
</style>
