<template>
  <div class="back-drop" @click.self="save">
    <div class="modal">
      <div class="modal-header">
        <h3 class="text-uppercase h3">Aditional notes</h3>
      </div>
      <div class="modal-content">
        <form class="notes__form">
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            placeholder="e.g. Good Tech Company"
            v-model="notes"
          >
          </textarea>
        </form>
      </div>
      <div class="modal-footer">
        <button @click.stop="save" class="text-uppercase notes__btn-save">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  computed: {
    notes: {
      get() {
        return this.$store.state.company.notes;
      },
      set(value) {
        this.$store.commit('updateNotes', value);
      },
    },
  },
  methods: {
    save() {
      this.$store.commit('dismissModal');
    },
  },
};
</script>
