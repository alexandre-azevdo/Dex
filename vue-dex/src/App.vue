<template>
  <div
    id="app"
    class="small-container"
  >
  <header>
      <h1>Pokedex</h1>
      <dex-search-form />
      <page-setter />
    </header>

      <section>
        <dex-list />
      </section>

      <footer>
        <page-setter />
      </footer>

  </div>
</template>

<script>
  import DexList from '@/components/DexList.vue'
  import DexSearchForm from '@/components/DexSearchForm.vue'
  import PageSetter from '@/components/PageSetter.vue'

  export default {
    name: 'app',
    components: {
      DexList,
      DexSearchForm,
      PageSetter
    },

    mounted() {
      this.getObjects()
    },

    methods: {
      getObjects() {
        this.$store.dispatch('load')
      }
    },
  }

</script>

<style>
  .dex-favorite-button {
    float: right;
    width: 40px;
    height: 40px;
    padding: 0px;
    border-radius: 3px;
  }

  section#main {
    font-family: sans-serif;
    float: right;
    background-color: rgba(255, 120, 40, 0.8);
    width: 85%; 
  }

  #detail {
    display: none;
    z-index: 1;
    background-color: white;
    position: fixed;
    padding: 5px;
    margin: 5px;
    width: 25%;
    height: 25%;
    left: 50%;
    top: 50%;
  }

  #detail-image {
    object-fit: cover;
    float: left;
    width: 120px;
    height: 120px;
    border: 5px solid #ccc;
    margin: 5px;
  }

  .dex-block {
    background-color: rgba(255, 120, 40, 0.8);
  }

  .dex-block-favorite {
    background-color: rgba(255, 255, 40, 0.8);
  }

  .dex-list {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .dex-block, .dex-block-favorite {
    min-width: 200px;
    max-width: 400px;
    padding: 5px;
    margin: 5px;
    border: 5px solid #ccc;
  }

  .dex-block:hover, .dex-block-favorite:hover {
    background-color: white;
  }

  .dex-image {
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }

  .dex-index {
    float: left;
    position: relative;
    width: 50px;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .dex-subtitle {
    width: 100%;
    height: 20%;
    position: relative;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .page-setter {
    background-color: rgba(255, 255, 40, 0.8);
    text-align: center;
  }

  footer {
    margin-top: 50px;
    padding: 10px;
    clear: both;
    background-color: red;
    text-align: center;
  }
</style>