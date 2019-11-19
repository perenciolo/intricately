<template>
  <div class="layout__wrapper">
    <div class="bread-crumb">
      Home / Company Data
    </div>
    <section>
      <aside>
        <nav-tabs />
      </aside>
      <main>
        <company-data />
      </main>
    </section>
  </div>
</template>

<script>
import NavTabs from './NavTabs.vue';
import CompanyData from './CompanyData.vue';
export default {
  components: {
    NavTabs,
    CompanyData,
  },
};
</script>
