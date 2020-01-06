export const config = {
  name: 'Iván Arjona',
  longName: 'Iván Arjona Alonso',
  titles: [
    'Software Engineer',
    'Full-Stack Web Developer'
  ]
};

export const education = [
  {
    title: 'Máster Universitario en Inteligencia de Negocio y Big Data en Entornos Seguros',
    place: 'Universidad de Burgos',
    date: '2018 - 2019',
    logo: require('./assets/ubu.png'),
    logoWebp: require('./assets/ubu.webp'),
    grade: 8.5,
    link: 'https://www.ubu.es/master-universitario-online-en-inteligencia-de-negocio-y-big-data-en-entornos-seguros-business-intelligence-and-big-data-cyber-secure-environments-interuniversitario'
  },
  {
    title: 'Grado en Ingeniería Informática',
    place: 'Universidad de Burgos',
    date: '2014 - 2018',
    logo: require('./assets/ubu.png'),
    logoWebp: require('./assets/ubu.webp'),
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
    logo: require('./assets/softeca.svg?data'),
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
    logoWebp: require('./assets/ubu.webp'),
    grade: '9',
    description: 'Análisis de datos sobre presupuestos de reformas de construcción con el objetivo de limpiar, preparar, visualizar y construir un modelo de regresión que prediga los precios de estos presupuestos utilizando librerías como scikit-learn y pandas.'
  },
  {
    title: 'TFG Datos públicos',
    place: 'Universidad de Burgos',
    date: '02/2018 - 06/2019',
    logo: require('./assets/github.svg?data'),
    grade: '9.5',
    link: 'https://github.com/IvanArjona/TFG-Datos-publicos',
    description: 'Aplicación Web para la recopilación, tratamiento y visualización de datos públicos. Proyecto de fin de grado con calificación de 9.5/10.'
  },
  {
    title: 'Predicción de delincuencia con datos públicos',
    place: 'XVIII Conferencia de la Asociación Española para la Inteligencia Artificial',
    date: '2018',
    logo: require('./assets/caepia.png'),
    logoWebp: require('./assets/caepia.webp'),
    link: 'https://sci2s.ugr.es/caepia18/proceedings/docs/CAEPIA2018_paper_214.pdf'
  },
];

export const skills = [
  {
    group: 'Front-end',
    skills: [
      {
        name: 'JavaScript',
        icon: require('./assets/skills/javascript.svg?data')
      },
      {
        name: 'TypeScript',
        icon: require('./assets/skills/typescript.svg?data'),
        link: 'https://www.typescriptlang.org/'
      },
      {
        name: 'Vue.js',
        icon: require('./assets/skills/vue.svg?data'),
        link: 'https://vuejs.org/'
      },
      {
        name: 'Angular',
        icon: require('./assets/skills/angular.svg?data'),
        link: 'https://angular.io/'
      },
      {
        name: 'jQuery',
        icon: require('./assets/skills/jquery.svg?data'),
        link: 'https://jquery.com/'
      },
      {
        name: 'Sass',
        icon: require('./assets/skills/sass.svg?data'),
        link: 'https://sass-lang.com/'
      },
      {
        name: 'Bootstrap',
        icon: require('./assets/skills/bootstrap.svg?data'),
        link: 'https://getbootstrap.com/'
      },
      {
        name: 'Foundation',
        icon: require('./assets/skills/foundation.svg?data'),
        link: 'https://foundation.zurb.com/'
      },
      {
        name: 'Webpack',
        icon: require('./assets/skills/webpack.svg?data'),
        link: 'https://webpack.js.org/'
      },
    ]
  },
  {
    group: 'Back-end',
    skills: [
      {
        name: 'Python',
        icon: require('./assets/skills/python.svg?data'),
        link: 'https://www.python.org/'
      },
      {
        name: 'php',
        icon: require('./assets/skills/php.svg?data'),
        link: 'https://www.php.net/'
      },
      {
        name: 'Java',
        icon: require('./assets/skills/java.svg?data'),
        link: 'https://www.java.com/'
      },
      {
        name: 'Laravel',
        icon: require('./assets/skills/laravel.svg?data'),
        link: 'https://laravel.com/'
      },
      {
        name: 'Flask',
        icon: require('./assets/skills/flask.svg?data'),
        link: 'https://www.palletsprojects.com/p/flask/'
      },
      {
        name: 'MongoDB',
        icon: require('./assets/skills/mongodb.svg?data'),
        link: 'https://www.mongodb.com/'
      },
      {
        name: 'MySQL',
        icon: require('./assets/skills/mysql.svg?data'),
        link: 'https://www.mysql.com/'
      },
      {
        name: 'Docker',
        icon: require('./assets/skills/docker.svg?data'),
        link: 'https://www.docker.com/'
      },
    ]
  },
  {
    group: 'Big Data & Machine Learning',
    skills: [
      {
        name: 'Apache Spark',
        icon: require('./assets/skills/spark.svg?data'),
        link: 'https://spark.apache.org/'
      },
      {
        name: 'Keras',
        icon: require('./assets/skills/keras.svg?data'),
        link: 'https://keras.io/'
      },
      {
        name: 'Scikit-learn',
        icon: require('./assets/skills/scikit-learn.svg?data'),
        link: 'https://scikit-learn.org/'
      },
      {
        name: 'Apache Hive',
        icon: require('./assets/skills/hive.svg?data'),
        link: 'https://hive.apache.org/'
      },
      {
        name: 'Splunk',
        icon: require('./assets/skills/splunk.svg?data'),
        link: 'https://www.splunk.com/'
      },
      {
        name: 'Power BI',
        icon: require('./assets/skills/powerbi.svg?data'),
        link: 'https://powerbi.microsoft.com/'
      },
      {
        name: 'NumPy',
        icon: require('./assets/skills/numpy.svg?data'),
        link: 'https://numpy.org/'
      },
      {
        name: 'SciPy',
        icon: require('./assets/skills/scipy.svg?data'),
        link: 'https://www.scipy.org/'
      },
    ]
  }
];

export const socials = [
  { name: 'LinkedIn', icon: ['fab', 'linkedin-in'], href: 'https://www.linkedin.com/in/ivan-arjona/' },
  { name: 'GitHub', icon: ['fab', 'github'], href: 'https://github.com/IvanArjona' },
  { name: 'GitLab', icon: ['fab', 'gitlab'], href: 'https://gitlab.com/Ivanyn' },
  { name: 'Facebook', icon: ['fab', 'facebook'], href: 'https://www.facebook.com/Ivanyn' },
  { name: 'Telegram', icon: ['fab', 'telegram-plane'], href: 'https://t.me/Ivanyn' },
  { name: 'Email', icon: ['fa', 'envelope'], href: 'mailto:ivanarjonaalonso@gmail.com' },
];
