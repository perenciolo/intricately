import 'Styles/main.scss';
import Vue from 'vue';

import App from 'Components/App.vue';

new Vue({
  render: createElement => createElement(App),
  el: '#app',
});
