<template>
  <div class="home">
    <!-- <sui-segment padded>
      <docs-wireframe name="short-paragraph" />
    </sui-segment> -->
    <sui-button id="add-entry" size="huge" positive circular icon="add" />
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
#add-entry {
  position: fixed;
  bottom: 5%;
  right: 5%;
}

</style>
