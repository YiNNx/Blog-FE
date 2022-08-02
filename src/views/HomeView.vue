<template>
  <div class="home">
    <HomePage/>
    <!-- <div class="pleft"> -->
    <!-- <div class="head-img">
        <img src="https://blog.csdn.net/qq_42177478" alt="">
    </div>
    <div class="blog-name">me</div>
    <div class="blog-info">他很懒，什么都没有写</div>
    <div class="blog-about">
        <ul type="none">
            <li><a href="">关于我们</a></li>
            <li><a href="">关于他们</a></li>
            <li><a href="">关于你们</a></li>
        </ul>
    </div>
    <div class="blog-tags">
        <ul type="none">
            <li><a href="">JS</a></li>
            <li><a href="">CSS</a></li>
            <li><a href="">HTML</a></li>
        </ul>
    </div> -->
<!-- </div> -->
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'
export default {
  name: 'HomeView',
  components: { HomePage }
}
</script>

<style>
/*左边栏*/
.pleft{
    right: 2rem;
    background-color: rgba(160, 160, 160, 0.342);
    width: 20%;
    padding-top: 25px;
    color: white;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 20px 20px 15px 15px;
    position: fixed;
}
.head-img{
    border: 1px solid white;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin: 0 auto;
}
.head-img>img{
    max-width: 100%;
}
.blog-name{
    text-align: center;
    padding: 15px 0;
}
.blog-info{
    text-align: center;
    font-size: 13px;
    padding: 5px;
}
.blog-about,.blog-tags{
    text-align: center;
    padding: 10px 0;
}
.blog-about a,.blog-tags a{
    color: #a3a3a3;
    font-size: 11px;
}
.blog-about{
    margin-top: 90%;
}
.blog-tags li:before{
    content: "#";
    color: #eeeeee;
    font-size: 10px;
}
</style>
