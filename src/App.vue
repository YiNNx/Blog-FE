<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">LogIn</router-link> |
    <router-link to="/compose">Editer</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Courier,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: right;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

nav a:hover {
  color: #9d9d9d;
}
</style>
