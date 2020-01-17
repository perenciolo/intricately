<template>
  <div class="company-data__wrapper">
    <div class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra
      sagittis porta. Donec eu magna lobortis, interdum nibh non, scelerisque
      lorem.
    </div>
    <form>
      <label for="name">
        <span>Company Name</span>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g Your Company Name"
          v-model="$v.company.name.$model"
          @blur="$v.company.name.$touch()"
        />
        <template v-if="nameErrors.length">
          <div
            class="validation--error"
            v-for="(name, index) in nameErrors"
            :key="index"
          >
            {{ name }}
          </div>
        </template>
      </label>
      <label for="#spend">
        <span>Company Spend</span>
        <input
          type="number"
          id="spend"
          name="spend"
          placeholder="e.g $150,000"
          v-model="$v.company.spend.$model"
          min="0"
          @blur="$v.company.spend.$touch()"
        />
        <template v-if="spendErrors.length">
          <div
            class="validation--error"
            v-for="(spend, index) in spendErrors"
            :key="index"
          >
            {{ spend }}
          </div>
        </template>
      </label>
      <label for="#ability">
        <span>Company Spend Ability</span>
        <input
          type="text"
          id="ability"
          name="ability"
          placeholder="e.g $150,000 - $330,000"
          v-model="$v.company.ability.$model"
          @blur="$v.company.ability.$touch()"
        />
        <template v-if="abilityErrors.length">
          <div
            class="validation--error"
            v-for="(ability, index) in abilityErrors"
            :key="index"
          >
            {{ ability }}
          </div>
        </template>
      </label>
      <label for="#notes">
        <span>Notes</span>
        <textarea
          type="number"
          id="notes"
          name="notes"
          placeholder="e.g Good Tech Company"
          @focus="showModal = true"
        ></textarea>
      </label>
    </form>
    <Modal v-if="showModal" @dismiss="showModal = false" />
  </div>
</template>

<script>
import { required, minValue, minLength } from 'vuelidate/lib/validators';

import Modal from '../components/Modal.vue';

const checkPattern = value => {
  const pattern = String(value);

  if (!/( - )/.test(pattern)) {
    return false;
  }

  return true;
};

const checkSpendAbility = value => {
  const pattern = String(value);
  let [spend, ability] = pattern.split(' - ');

  if (!!spend && !!ability) {
    spend = Number(spend.replace(/\D+/g, ''));
    ability = Number(ability.replace(/\D+/g, ''));
  }

  // Invalid case spend must be lower than spend ability
  if (spend > ability) {
    return false;
  }

  return true;
};

export default {
  name: 'CompanyData',
  components: {
    Modal,
  },
  data: () => ({
    showModal: false,
    company: {
      name: '',
      spend: 0,
      ability: '',
    },
  }),
  validations: {
    company: {
      name: {
        required,
        minLength: minLength(1),
      },
      spend: {
        required,
        minValue: minValue(0),
      },
      ability: {
        required,
        checkPattern,
        checkSpendAbility,
      },
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      const name = this.$v.company.name;

      if (!name.$error) {
        return errors;
      }

      !name.required && errors.push('The field Company Name is required');
      return errors;
    },
    spendErrors() {
      const errors = [];
      const spend = this.$v.company.spend;

      if (!spend.$error) {
        return errors;
      }

      !spend.required && errors.push('The field Company Spend is required');
      !spend.minValue &&
        errors.push('The field Company Spend must be greater than 0');
      return errors;
    },
    abilityErrors() {
      const errors = [];
      const { spend, ability } = this.company;
      const abilityValidation = this.$v.company.ability;

      if (!abilityValidation.$error) {
        return errors;
      }

      !abilityValidation.checkPattern &&
        errors.push(
          'The data is invalid please follow the pattern: $150,000 - $330,000'
        );
      !abilityValidation.checkSpendAbility &&
        errors.push(
          'The Company Spend cannot be greater than Company Spend Ability'
        );
      !abilityValidation.required &&
        errors.push('The field Company Spend Ability is required');

      return errors;
    },
  },
  methods: {},
};
</script>
