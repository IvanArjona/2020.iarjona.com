<template>
  <div>
    <p class="bold section-title">Empleos</p>
    <MediaCard :items="jobs"/>
    <p class="bold section-title">Proyectos</p>
    <MediaCard :items="projects"/>
  </div>
</template>

<script>
import MediaCard from './MediaCard';
import { jobs, projects } from '../data';

export default {
  name: 'Experience',
  data() {
    return {
      jobs: jobs,
      projects: projects
    }
  },
  components: {
    MediaCard
  }
}
</script>
