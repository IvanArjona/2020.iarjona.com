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

export default {
  name: 'Experience',
  data() {
    return {
      jobs: [
        {
          title: 'Full-Stack Web Developer',
          place: 'Softeca',
          date: '01/2019 - Actualidad',
          logo: require('../assets/softeca.svg'),
          link: 'http://www.softeca.es/'
        }
      ],
      projects: [
        {
          title: 'TFM Predicción de precios de reformas en construcción',
          place: 'Universidad de Burgos',
          date: '04/2019 - 07/2019',
          logo: require('../assets/ubu.png'),
          grade: '9',
          description: 'Análisis de datos sobre presupuestos de reformas de construcción con el objetivo de limpiar, preparar, visualizar y construir un modelo de regresión que prediga los precios de estos presupuestos utilizando librerías como scikit-learn y pandas.'
        },
        {
          title: 'TFG Datos públicos',
          place: 'Universidad de Burgos',
          date: '02/2018 - 06/2019',
          logo: require('../assets/github.svg'),
          grade: '9.5',
          link: 'https://github.com/IvanArjona/TFG-Datos-publicos',
          description: 'Aplicación Web para la recopilación, tratamiento y visualización de datos públicos. Proyecto de fin de grado con calificación de 9.5/10.'
        },
        {
          title: 'Predicción de delincuencia con datos públicos',
          place: 'XVIII Conferencia de la Asociación Española para la Inteligencia Artificial',
          date: '2018',
          logo: require('../assets/caepia.png'),
          link: 'https://sci2s.ugr.es/caepia18/proceedings/docs/CAEPIA2018_paper_214.pdf'
        },
      ]
    }
  },
  components: {
    MediaCard
  }
}
</script>
