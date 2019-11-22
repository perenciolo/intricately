<template>
  <div class="navtabs__wrapper">
    <nav>
      <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" to="/company-data">
        <div
          :active="isActive"
          :href="href"
          @click="navigate"
          class="tab"
          :class="{active: isActive}"
        >Company Data</div>
      </router-link>
      <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" to="/company-table">
        <div
          :active="isActive"
          :href="href"
          @click="navigate"
          class="tab"
          :class="{active: isActive}"
        >Company Table</div>
      </router-link>
      <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" to="/">
        <div
          :active="isActive"
          :href="href"
          @click="navigate"
          class="tab"
          :class="{active: isExactActive}"
        >Company Page</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
