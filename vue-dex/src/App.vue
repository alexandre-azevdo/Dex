<template>
  <div
    id="app"
    class="small-container"
  >
    <header>
      <div class="header-title">
        <h1>Pokédex</h1>
      </div>
      <nav>
          <div class="nav-link">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </div>
          <dex-search-form />
          <div class="nav-link">
            <router-link :to="{ name: 'Shiny' }">Favorites only</router-link>
          </div>
        </nav>
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

  .nav-link a {
    display: block;
    margin: 0;
    text-decoration: none;
    font-family: Verdana;
    font-size: 1em;
    color: black;
  }

  .nav-link:hover a {
    color: white;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: black;
    text-align: center;
    margin: 0px;
  }

  .nav-link:hover {
    background-color: tomato;
  }

  nav {
    width: 100%;
    height: 3em;
    background-color: white;
    padding: 0;

    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }

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
    /*margin-bottom: 2em;*/
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