import Router from 'vue-router';
import Vue from 'vue'
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

Vue.use(Router);

const routes = [
  {
    path: '/education',
    alias: '/',
    name: 'Education',
    component: Education,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/uses',
    redirect: '/skills'
  },
  {
    path: '*',
    redirect: '/'
  }
];

export default new Router({
  routes: routes,
  mode: 'history'
});