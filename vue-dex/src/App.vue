<template>
  <div
    id="app"
    class="small-container"
  >
      <aside> 
      Side Content
    </aside>
    <div id="rightSideWrapper">
    <header>
      <h1>Pokedex</h1>
      <dex-search-form @search:object="searchObject" />
    </header>

    <div id="content">
      <section>
          <dex-list :objects="filtered"/>
        </section>
    </div>
  </div>
  </div>
</template>

<script>
  import DexList from '@/components/DexList.vue'
  import DexSearchForm from '@/components/DexSearchForm.vue'

  export default {
    name: 'app',
    components: {
      DexList,
      DexSearchForm,
    },

    data() {
      return {
        objects: [],
        regex: "",
      }
    },

    computed: {
      filtered() {
        if (this.regex == "") {
          return this.objects
        }

        let exp = new RegExp(this.regex)

        return this.objects.filter(function(item) {
          return exp.test(item.name.toLowerCase())
        }) 
      }
    },

    mounted() {
      this.getObjects()
    },

    methods: {

      image(index, isFavorite) {
        return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (isFavorite ? "shiny/" : "") + index + ".png"
      },

      async getObjects() {
        const response = await this.axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=151');
        let results = (response.data.results);
        let objects = results.map( (object, index) => {
          const isFavorite = this.isFavorite(index+1)
          return {
              index: index + 1,
              isFavorite: isFavorite,
              name: this.capitalizeFirstLetter(object["name"]),
              imageUrl: this.image(index+1, false),
              favoriteImageUrl: this.image(index+1, true)
            }
        });

        this.objects = objects
    },

      searchObject(name) {
        this.regex = name.trim().toLowerCase()
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

  header {
      position: fixed;
  width: 70%; 
  height: 100px; /*Adjust the hight to your purposes*/
  
  /*Aesthetics*/
  background: lightSalmon;
  border-radius: 7px;
  z-index: 1;
  }

 aside {
  position:fixed; 
  height: 100%;
  width:30%;
  margin: 0px;  

  /*Aesthetics*/
  background: lightblue; 
  border-radius: 7px;
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

  #content {
  margin-top: 100px; /*The height of the   header*/
  display:flex;
  flex-flow: row wrap;
  }

  .dex-block {
    background-color: rgba(255, 120, 40, 0.8);
  }

  .dex-block-favorite {
    background-color: rgba(255, 255, 40, 0.8);
  }

  .dex-block, .dex-block-favorite {
    padding: 5px;
    margin: 5px;
    border: 5px solid #ccc;
    float: left;
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

  #rightSideWrapper {
  /*Strictly Necessary */
  width:70%; 
  float: right;
}

  .dex-subtitle {
    width: 100%;
    height: 20%;
    position: relative;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  section {
  /*Strictly Necessary */
   height: 400px;
   order: 1;
   flex: 0 1 100%;
  }


  footer {
    margin-top: 50px;
    padding: 10px;
    clear: both;
    background-color: red;
    text-align: center;
  }
</style>