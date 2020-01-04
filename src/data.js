export const config = {
  name: 'Iván Arjona',
  longName: 'Iván Arjona Alonso',
  title: 'Full-Stack Web Developer'
};

export const education = [
  {
    title: 'Máster Universitario en Inteligencia de Negocio y Big Data en Entornos Seguros',
    place: 'Universidad de Burgos',
    date: '2018 - 2019',
    logo: require('./assets/ubu.png'),
    grade: 8.5,
    link: 'https://www.ubu.es/master-universitario-online-en-inteligencia-de-negocio-y-big-data-en-entornos-seguros-business-intelligence-and-big-data-cyber-secure-environments-interuniversitario'
  },
  {
    title: 'Grado en Ingeniería Informática',
    place: 'Universidad de Burgos',
    date: '2014 - 2018',
    logo: require('./assets/ubu.png'),
    grade: 8.5,
    link: 'https://www.ubu.es/grado-en-ingenieria-informatica'
  }
];

export const courses = [
  { title: 'Desarrollo de aplicaciones web con Angular 8' },
  { title: 'Flask Web Development' },
  { title: 'Information Service Engineering (Hasso-Plattner-Institut)' },
  { title: 'Scrum Manager' }
];

export const jobs = [
  {
    title: 'Full-Stack Web Developer',
    place: 'Softeca',
    date: '01/2019 - Actualidad',
    logo: require('./assets/softeca.svg'),
    link: 'http://www.softeca.es/',
    rel: 'nofollow'
  }
];

export const projects = [
  {
    title: 'TFM Predicción de precios de reformas en construcción',
    place: 'Universidad de Burgos',
    date: '04/2019 - 07/2019',
    logo: require('./assets/ubu.png'),
    grade: '9',
    description: 'Análisis de datos sobre presupuestos de reformas de construcción con el objetivo de limpiar, preparar, visualizar y construir un modelo de regresión que prediga los precios de estos presupuestos utilizando librerías como scikit-learn y pandas.'
  },
  {
    title: 'TFG Datos públicos',
    place: 'Universidad de Burgos',
    date: '02/2018 - 06/2019',
    logo: require('./assets/github.svg'),
    grade: '9.5',
    link: 'https://github.com/IvanArjona/TFG-Datos-publicos',
    description: 'Aplicación Web para la recopilación, tratamiento y visualización de datos públicos. Proyecto de fin de grado con calificación de 9.5/10.'
  },
  {
    title: 'Predicción de delincuencia con datos públicos',
    place: 'XVIII Conferencia de la Asociación Española para la Inteligencia Artificial',
    date: '2018',
    logo: require('./assets/caepia.png'),
    link: 'https://sci2s.ugr.es/caepia18/proceedings/docs/CAEPIA2018_paper_214.pdf'
  },
];

export const socials = [
  { name: 'LinkedIn', icon: ['fab', 'linkedin-in'], href: 'https://www.linkedin.com/in/ivan-arjona/' },
  { name: 'GitHub', icon: ['fab', 'github'], href: 'https://github.com/IvanArjona' },
  { name: 'GitLab', icon: ['fab', 'gitlab'], href: 'https://gitlab.com/Ivanyn' },
  { name: 'Facebook', icon: ['fab', 'facebook'], href: 'https://www.facebook.com/Ivanyn' },
  { name: 'Telegram', icon: ['fab', 'telegram-plane'], href: 'https://t.me/Ivanyn' },
  { name: 'Email', icon: ['fa', 'envelope'], href: 'mailto:ivanarjonaalonso@gmail.com' },
];