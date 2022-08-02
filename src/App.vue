<template>
  <top-bar>
    <router-link to="/"> Home </router-link>
    <router-link to="/about"> About </router-link>
    <router-link to="/login"> LogIn </router-link>
  </top-bar>
  <router-view/>
</template>

<style>
@font-face {
    font-family: 'Source Han Serif CN';
    src: url(./assets/font/SourceHanSerifCN-Regular.otf);
}

#app {
  font-family: Courier,'Source Han Serif CN',Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  text-align: center;
  color: #314960;
}

top-bar {
  text-align: right;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  background: #e6edf0;
}

top-bar a {
  text-decoration: none;
  font-weight: bold;
  color: #32485e;
  background: #e6edf0;
  padding: 0rem 1rem;
  line-height: 3rem;
  word-break: keep-all;
  cursor: pointer;
}

top-bar a:hover {
  color: #9d9d9d;
}
</style>
