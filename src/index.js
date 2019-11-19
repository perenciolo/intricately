import 'Styles/main.scss';
import Vue from 'vue';
import Navbar from 'Components/Navbar.vue';

new Vue({
  render: createElement => createElement(Navbar),
  el: '#app',
});
