import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CompanyTable from '../pages/CompanyTable.vue';
import CompanyData from '../pages/CompanyData.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CompanyData', () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      showModal: false,
      company: {
        name: '',
        spend: 0,
        ability: '',
        notes: '',
      },
    };

    store = new Vuex.Store({
      modules: {
        myModule: {
          state,
        },
      },
    });
  });

  test('is a Vue instance', () => {
    const wrapper = mount(CompanyData, { store, localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('CompanyTable', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CompanyTable);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
