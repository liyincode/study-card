<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
