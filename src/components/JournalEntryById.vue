<template>
 <div>
    <header>
      <div id="grid-container">
        <div class="grid-child childOne">
          <button id="entry" size="huge" class="back-btn"><router-link to='/'><i class="double angle left icon"></i></router-link></button>
        </div>
        <div class="grid-child childTwo">
            <p>{{ entry.title }}</p>
        </div>
      </div>
    </header>
    <main>
        <form>
          <textarea type="text" ref="writing" class="input-box" :value="entry.body"></textarea>
        </form>
    </main>
 </div>
</template>

<script>

export default {
data () {
 return {
      id: this.$route.params.id,
      entry: {}
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
    this.entry = data.body;
  });
  },
}
</script>

<style scoped>
header {
  display: grid;
  text-align: left;
  margin: 0;
  height: 56px;
  padding: 0;
  background: #356;
  color: #fff;
}
#grid-container {
  display: grid;
  grid-template-columns: 20% 80%;
  height: inherit;
}
.back-btn, .back-btn:hover {
  background: #356;
  border: none;
  width: 100%;
}
.grid-child {
  position: relative;
  height: 30px;
  top: 25%;
}
.childTwo {
  font-size: 22px;
  padding-left: 10%;

}
.icon {
    font-size: 35px;
    margin-top: -5px;
    color: #fff;
}
main {
  background: #ffb;
  width: 100%;
  height: 91%;
  position: absolute;
  text-align: left;
  padding: 4px;
}
.input-box {
  border: none;
  background: transparent;
  width: 100%;
  height: 82vh;
}
textarea {
  resize: none;
}

</style>
