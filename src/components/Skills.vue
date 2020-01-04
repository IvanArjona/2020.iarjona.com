<template>
  <div>
    <div v-for="(skillGroup, i) in skills" :key="i" class="skill-group">
      <p class="bold section-title">{{ skillGroup.group }}</p>
      <SkillIcon v-for="(skill, j) in skillGroup.skills"
          :key="j" :skill="skill"/>
    </div>
  </div>
</template>

<script>
import SkillIcon from './SkillIcon';
import { skills } from '../data';

export default {
  name: 'Skills',
  data() {
    return {
      skills: skills
    }
  },
  components: {
    SkillIcon
  }
}
</script>
