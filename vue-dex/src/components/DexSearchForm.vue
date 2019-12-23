<template>
  <div id="dex-search-form">
    <form @submit.prevent="handleSubmit">
      <label>Search</label>
      <input type="text" 
              v-model="name"
      >
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'dex-search-form',
    data() {
      return {
        name: '',
      }
    },

    methods: {
      handleSubmit() {
        this.$store.commit('updateSearch', this.name)
      },
    }
  }

</script>

<style scoped>

  form {
    font-family: Verdana;
    margin-bottom: 2em;
  }

  form label {
    margin: 5px;
  }

</style>