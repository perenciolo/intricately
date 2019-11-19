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
        />
      </label>
      <label for="#spend">
        <span>Company Spend</span>
        <input
          type="number"
          id="spend"
          name="spend"
          placeholder="e.g $150,000"
        />
      </label>
      <label for="#ability">
        <span>Company Spend Ability</span>
        <input
          type="number"
          id="ability"
          name="ability"
          placeholder="e.g $330,000"
        />
      </label>
      <label for="#notes">
        <span>Notes</span>
        <textarea
          type="number"
          id="notes"
          name="notes"
          placeholder="e.g Good Tech Company"
        ></textarea>
      </label>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
