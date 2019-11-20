import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Company from 'Pages/Company.vue';
import CompanyData from 'Pages/CompanyData.vue';
import CompanyTable from 'Pages/CompanyTable.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Company Page',
      component: Company,
    },
    {
      path: '/company-data',
      name: 'Company Data',
      component: CompanyData,
    },
    {
      path: '/company-table',
      name: 'Company Table',
      component: CompanyTable,
    },
    { path: '*', component: { template: '<h2>Not Found</h2>' } },
  ],
});
