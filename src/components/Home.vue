<template>
  <div class="home">
    <header>
      <span>Journal</span>
    </header>
    <main>
      <div v-for="entry in entries" :key="entry.id" class="single-blog">
          <p>{{ entry.body }}</p>
      </div>
    </main>
    <router-link to='/entry'><sui-button id="entry" size="huge" positive circular icon="add" /></router-link>
  </div>
</template>

<script>
export default {
  // name: 'ButtonEmphasisExample',
  data () {
    return {
      entries: []
    }
  }, 
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      // console.log(data);
      this.entries = data.body.slice(0, 10);  
     }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#entry {
  position: fixed;
  bottom: 5%;
  right: 5%;
}
main {
  width: 100%;
  height: 91vh;
  /* background: rgb(103, 192, 207); */
  overflow-y: scroll;
}
.single-blog {
  padding: 5px;
  margin: 12px;
  background-color: #ffb;
  border-radius: 4  px;
  text-align: left;
}

</style>
