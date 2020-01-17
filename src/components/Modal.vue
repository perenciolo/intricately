<template>
  <div class="back-drop" @click.self="$emit('dismiss')">
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
          >
          </textarea>
        </form>
      </div>
      <div class="modal-footer">
        <button
          @click.stop="$emit('dismiss')"
          class="text-uppercase notes__btn-save"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>
