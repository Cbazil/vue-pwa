<template>
  <div class="home">
    <header>
      <span>Journal</span>
    </header>

    <router-link to='/entry'><sui-button id="entry" size="huge" positive circular icon="add" /></router-link>
  </div>
</template>

<script>
export default {
  // name: 'ButtonEmphasisExample',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
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

</style>
