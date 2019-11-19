<template>
  <div class="main__wrapper">
    <navbar />
    <layout />
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Layout from './Layout.vue';
export default {
  components: {
    Navbar,
    Layout,
  },
};
</script>
