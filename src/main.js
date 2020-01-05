import Vue from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faGitlab, faFacebook, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Modernizr from '../vendor/modernizr-custom';

Modernizr.webp;

library.add(faLinkedinIn, faGithub, faGitlab, faFacebook, faTelegramPlane, faEnvelope);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
