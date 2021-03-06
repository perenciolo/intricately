<template>
  <div class="company-data__wrapper">
    <div class="text text--default">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra
      sagittis porta. Donec eu magna lobortis, interdum nibh non, scelerisque
      lorem.
    </div>
    <form>
      <label for="name">
        <strong class="text-uppercase">Company Name</strong>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g Your Company Name"
          v-model="$v.name.$model"
          @blur="$v.name.$touch()"
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
        <strong class="text-uppercase">Company Spend</strong>
        <input
          type="number"
          id="spend"
          name="spend"
          placeholder="e.g $150,000"
          v-model="$v.spend.$model"
          min="0"
          @blur="$v.spend.$touch()"
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
        <strong class="text-uppercase">Company Spend Ability</strong>
        <input
          type="text"
          id="ability"
          name="ability"
          placeholder="e.g $150,000 - $330,000"
          v-model="$v.ability.$model"
          @blur="$v.ability.$touch()"
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
        <strong class="text-uppercase">Notes</strong>
        <textarea
          type="number"
          id="notes"
          name="notes"
          placeholder="e.g Good Tech Company"
          @focus="$store.commit('showModal')"
          v-model="notes"
        ></textarea>
      </label>
    </form>
    <Modal v-if="showModal" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  validations: {
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
  computed: {
    ...mapState(['showModal']),
    name: {
      get() {
        return this.$store.state.company.name;
      },
      set(value) {
        this.$store.commit('updateName', value);
      },
    },
    spend: {
      get() {
        return this.$store.state.company.spend;
      },
      set(value) {
        this.$store.commit('updateSpend', value);
      },
    },
    ability: {
      get() {
        return this.$store.state.company.ability;
      },
      set(value) {
        this.$store.commit('updateAbility', value);
      },
    },
    notes: {
      get() {
        return this.$store.state.company.notes;
      },
      set(value) {
        this.$store.commit('updateNotes', value);
      },
    },
    nameErrors() {
      const errors = [];
      const name = this.$v.name;

      if (!name.$error) {
        return errors;
      }

      !name.required && errors.push('The field Company Name is required');
      return errors;
    },
    spendErrors() {
      const errors = [];
      const spend = this.$v.spend;

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
      const { spend, ability } = this;
      const abilityValidation = this.$v.ability;

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
};
</script>
