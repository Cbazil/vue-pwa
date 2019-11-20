<template>
 <div>
    <header>
        <button id="entry" size="huge" class="back-btn" ><router-link to='/'><i class="double angle left icon"></i></router-link></button>
    </header>
    <main>
        <input type="text" class="input-box">
    </main>
 </div>
</template>

<script>

export default {

data () {
 return {

    }
  },
 methods: {
 
  }
}
</script>

<style scoped>
header {
  text-align: left;
  margin: 0;
  height: 56px;
  padding: 0;
  background: #ff8;
  color: #fff;
}
.back-btn, .back-btn:hover {
  background: #ff8;
  border: none;
  height: inherit;
  width: 20%;

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
}
</style>