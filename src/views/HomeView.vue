<template>
     <div class="container">
       <h1 class="typed-out">Hi, this is YiNN's Blog.</h1>
    </div>
       <div class="print">
    <h1 ></h1>
  </div>
      <HomePage />
  <div class="footer">
    <a href="/">© 2022 YiNN's Blog</a> | 
    <a href="https://github.com/YiNNx/Blog-BE">Powered by YiNN</a> |
    <a href="https://beian.miit.gov.cn/">赣ICP备2022006581号</a>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';

export default {
  name: 'HomeView',
  components: { 
    HomePage,
 },
  data() {
    return {
    };
  },
  created() {
},
  methods: {
      
  }
};

</script>

<style scoped>

.container {
  display: inline-block;
}

.container h1{
  text-align: left;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
.typed-out{
    overflow: hidden;
    border-right: .15em solid rgb(177, 177, 177);
    white-space: nowrap;
    font-size: 1.6rem;
    width: 0;
    animation: typing 2.5s forwards;
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
  word-break: break-word;
}

.footer a:hover {
  color: rgb(179, 188, 214);
}

@media screen and (max-width: 500px) {
  .footer{
    padding: 0;
    font-size: 10px;
    height: 3rem;
  }
  .footer a,p {
  text-decoration: none;
  color: #4a6988;
  padding: 0rem 0rem;
  line-height: 2rem;
  word-break: break-word;
}
}
</style>
