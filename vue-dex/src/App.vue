<template>
  <div
    id="app"
    class="small-container"
  >
    <header>
      <div class="header-title">
        <router-link :to="{ name: 'Shiny' }">Favorites only</router-link>
        <h1>Pokédex</h1>
      </div>
      <dex-search-form />
      <page-setter />
    </header>

      <section class="content">
        <aside>
          <dex-detail />
        </aside>
        <router-view></router-view>
        <!--<dex-list />!-->
      </section>
      <footer>
        <page-setter />
      </footer>

  </div>
</template>

<script>
  //import DexList from '@/components/DexList.vue'
  import DexSearchForm from '@/components/DexSearchForm.vue'
  import PageSetter from '@/components/PageSetter.vue'
  import DexDetail from '@/components/DexDetail.vue'


  export default {
    name: 'app',
    components: {
      //DexList,
      DexSearchForm,
      PageSetter,
      DexDetail
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

  header {
    padding: 0;
    margin: 0;
  }

  aside {
    background-color: tomato;
  }

  .content {
    display: grid;
    grid-template-columns: 25% 75%
  }

  body {
    margin: 0px;
    padding: 0px;
  }

  .header-title {
    display: flex;
    align-items: flex-end;
    padding: 5px;
    margin-bottom: 2em;
    height: 9em;
    background-color: tomato;
  }

  .header-title h1 {
    font-size: 5em;
    padding: 0;
    margin: 0;
    font-family: Verdana;
    color: white;
  }

</style>