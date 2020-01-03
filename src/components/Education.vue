<template>
  <div>
    <p class="bold section-title">Estudios</p>
    <MediaCard :items="education"/>
    <p class="bold section-title">Cursos</p>
    <MediaCard :items="courses" :bold="false"/>
  </div>
</template>

<script>
import MediaCard from './MediaCard';
import { education, courses } from '../data';

export default {
  name: 'Education',
  data() {
    return {
      education: education,
      courses: courses
    }
  },
  components: {
    MediaCard
  }
}
</script>
