<template>
  <div class="top-bar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/login">LogIn</router-link>
  </div>
  <router-view/>
  <div class="footer">
    <a>© 2022 YiNN's Blog</a>
    <a href="https://github.com/YiNNx/Blog-BE">Powered by YiNN</a>
    <a href="https://beian.miit.gov.cn/">赣ICP备2022006581号</a>
  </div>
</template>

<style>

body {
  background-color: #f8f8f8;
  margin: 0;
  padding:0;
  height: 100%;
}

a{
    text-decoration: none;
}

@font-face {
    font-family: Courier,'Source Han Serif CN';
    src: url(./assets/font/SourceHanSerifCN-Regular.otf);
}

#app {
  color: #314960;
  text-align: center;
  font-family: 'Source Han Serif CN';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.top-bar {
  text-align: right;
  height: 4rem;
  padding: 0 8rem;
}
.top-bar a {
  text-decoration: none;
  font-weight: bold;
  color: #4a6988;
  padding: 0rem 0.5rem;
  line-height: 4rem;
  word-break: keep-all;
  cursor: pointer;
}

.top-bar a:hover {
  color: #ffffff;
}

router-view:after {
  content: "";
  display: table;
  clear: both;
}

.footer {
    height: 6rem;
    clear:both;
    background-color: #f1f1f1;
  padding: 0 10rem;

}

.footer a,p {
  text-decoration: none;
  color: #4a6988;
  padding: 0rem 2rem;
  line-height: 6rem;
  word-break: keep-all;
}

</style>
