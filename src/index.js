import 'Styles/main.scss';
import Vue from 'vue';

// Plugins
import './plugins/vuelidate';

// Routes
import router from 'Router';

// Store
import store from './store';

import App from './App.vue';

new Vue({
  router,
  store,
  render: createElement => createElement(App),
  el: '#app',
});
