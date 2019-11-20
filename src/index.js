import 'Styles/main.scss';
import Vue from 'vue';

// Routes
import router from 'Router';

import App from './App.vue';

new Vue({
  router,
  render: createElement => createElement(App),
  el: '#app',
});
