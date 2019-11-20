<template>
  <div class="navtabs__wrapper">
    <nav>
      <div class="tab">
        <router-link to="/company-data">
          <a>Company Data</a>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/company-table">Company Table</router-link>
      </div>
      <div class="tab active">
        <router-link to="/">Company Page</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
