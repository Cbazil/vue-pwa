<template>
  <div id="app">
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #356;
}

main {
  text-align: center;
  /* margin-top: 40px; */
}

header {
  text-align: left;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #356;
  color: #ffffff;
  font-weight: bold;
}

header span {
  display: block;
  position: relative;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;  
  font-size: 22px;
  font-weight: bold;
}
</style>
