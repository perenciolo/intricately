<template>
  <div class="layout__wrapper">
    <div class="bread-crumb">Home / Company Data</div>
    <section>
      <aside>
        <nav-tabs />
      </aside>
      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script>
import NavTabs from 'Components/NavTabs.vue';
export default {
  components: {
    NavTabs,
  },
};
</script>
