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

export default {
  name: 'Education',
  data() {
    return {
      education: [
        {
          title: 'Máster Universitario en Inteligencia de Negocio y Big Data en Entornos Seguros',
          place: 'Universidad de Burgos',
          date: '2018 - 2019',
          logo: require('../assets/ubu.png'),
          grade: 8.5,
        },
        {
          title: 'Grado en Ingeniería Informática',
          place: 'Universidad de Burgos',
          date: '2014 - 2018',
          logo: require('../assets/ubu.png'),
          grade: 8.5,
        }
      ],
      courses: [
        { title: 'Desarrollo de aplicaciones web con Angular 8' },
        { title: 'Flask Web Development' },
        { title: 'Information Service Engineering (Hasso-Plattner-Institut)' },
        { title: 'Scrum Manager' }
      ]
    }
  },
  components: {
    MediaCard
  }
}
</script>
