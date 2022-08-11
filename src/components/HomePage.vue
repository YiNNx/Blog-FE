<template>
    <div class="post-column" v-for="post in posts" :key="post">
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
import PostService from '@/requests/post';

export default {
  name: 'HomePage',
  data() {
    return {
      posts: [],
    //   typed: new Typed('.element')
    };
  },
  created() {
    PostService.GetPosts().then((response) => {
      this.posts = response.data.data;
    }).catch((err) => console.log(err));
  },
  methods: {

  },

};
</script>

<style scoped>

.post-column{
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 10rem;
    text-align: left;
}

.post{
    background-color: #ffffff;
    padding: 2.5rem;
    margin: 0 auto 0.63rem;
    cursor: pointer;
    overflow: hidden;
    display: grid;
    /* border: 2px solid #d4d4d4; */
    margin-bottom: -8rem;
}

.post-name{
    font-weight:bold;
    text-overflow: hidden;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    flex: 0 0 auto;
    max-width: 30em;
    float: left;
    border-left: 2px solid rgb(169, 169, 169);
    padding-left: 7px;
    font-size: 2.5ch;
}

.post-content{
    line-height: 1rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}

.post-date{
    float: left;
    padding-right: 5rem;
}

.post-info{
    float: right;
    text-align: right;

    padding: 0.2rem 0;
}
.post-info li{
    float: left;
    display: inline;
    padding: 0 10px;
}
.post-info a{
    color: gray;
}
.post-info a:hover {
    color: black;
}

.post-tag {
    float: right;
}

@media screen and (max-width: 1000px) {
  .post-column{
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

@media screen and (max-width: 500px) {
  .post-column{
    margin-left: 1rem;
    margin-right: 1rem;
    
  }
  .post{
    padding: 1.7rem;
    border-radius: 1rem;
    margin-bottom: -9rem;

}

}
</style>
