<template>
  <div class="main__wrapper">
    <navbar />
    <layout />
  </div>
</template>

<script>
import Navbar from 'Components/Navbar.vue';
import Layout from 'Components/Layout.vue';
export default {
  components: {
    Navbar,
    Layout,
  },
};
</script>
