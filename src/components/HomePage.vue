<template>
    <div class="post-list" v-for="post in posts" :key="post">
        <div class="post">
            <div class="post-name"><router-link :to="{path:'/post/'+post.pid}">{{post.title}}</router-link></div>
            <div class="post-content">{{post.excerpt}}</div>
            <div class="post-info">
            <div class="post-date">{{post.time}}</div>
            <div class="post-tags">
                <ul type="none" v-for="tag in post.tags" :key="tag">
                    <li><a href="">{{tag}}</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostService from '@/requests/post'

export default {
  name: 'HomePage',
  data () {
    return {
      posts: []
    }
  },
  created () {
    PostService.GetPosts().then(response => {
      this.posts = response.data.data
    }).catch(err => console.log(err))
  },
  methods: {

  }

}
</script>

<style>

/*post页面样式 */

/*通用样式*/
*{
    margin: 0;
    padding: 0;
    background-color: #ffffff;
}
a{
    text-decoration: none;
}

.post-list{
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 10rem;
    text-align: left;
}

.post{
    padding: 2.5rem;
    margin: 0 auto 0.63rem;
    cursor: pointer;
    overflow: hidden;
    display: grid;
    /* border: 2px solid #d4d4d4; */
    background-color: rgb(255, 255, 255);
    border-radius: 1.8rem;
    margin-bottom: -7.5rem;
}

.post-name{
    background-color: rgb(255, 255, 255);
    text-overflow: hidden;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    flex: 0 0 auto;
    max-width: 30em;
    float: left;
    border-left: 2px solid rgb(169, 169, 169);
    padding-left: 7px;
    font-size: 2ch;
}
.post-name a{
    background-color: rgb(255, 255, 255);
    color: black;
}

.post-content{
    background-color: rgb(255, 255, 255);
    line-height: 1rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}

.post-date{
    background-color: rgb(255, 255, 255);
    float: left;
    padding-right: 5rem;
}

.post-info{
    background-color: rgb(255, 255, 255);
    float: right;
    text-align: right;

    padding: 0.2rem 0;
}
.post-info li{
    background-color: rgb(255, 255, 255);
    float: left;
    display: inline;
    padding: 0 10px;
}
.post-info a{
    background-color: rgb(255, 255, 255);
    color: gray;
}
.post-info a:hover {
    color: black;
}

.post-tag {
    float: right;
}

</style>
