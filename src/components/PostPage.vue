<template>
        <div class="post-detail">
            <!-- <div class="post-name">{{post.title}}</div> -->
            <div class="post-content"  v-html="html"></div>
            <div class="post-info">
            <div class="post-date">{{post.time}}</div>
            <div class="post-tags">
                <ul type="none" v-for="tag in post.tags" :key="tag">
                    <li><a href="">{{tag}}</a></li>
                </ul>
            </div>
            </div>
        </div>
</template>

<script>
import PostService from '@/requests/post';

export default {
  name: 'PostPage',
  data() {
    return {
      post: {},
    };
  },
  created() {
    PostService.GetPostDetail(this.$route.params.pid).then((response) => {
      this.post = response.data.data;
      this.html = this.decodeUnicode(response.data.data.content);
    }).catch((err) => console.log(err));
  },
  methods: {
    decodeUnicode(str) {
      return unescape(str.replace(/\\u/gi, '%u'));
    },
  },

};
</script>

<style scoped>

/*post页面样式 */

/*通用样式*/
*{
    margin: 0;
    padding: 0;
    overflow: scroll;
}
a{
    text-decoration: none;
}

.post-detail{
    padding: 3rem 3rem;
    background-color: #ffffff;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 5rem;
    text-align: left;
    cursor: pointer;
    overflow: hidden;
    /* border: 2px solid #d4d4d4; */
    border-radius: 1.8rem;
    margin-bottom: 1.5rem;
}

.post-name{
    padding: 2rem 2rem;
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
    color: black;
}

.post-content{
    padding: 2rem 2rem;
    line-height: 2rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}

.post-date{
    padding: 2rem 2rem;
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
  .post-detail{
    font-size: 0.6rem;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem 1rem;
  }

.post-content{
    padding: 0rem 1rem;
    line-height: 0.8rem;
    padding-top: 1.2rem;
    padding-bottom: 0.6rem;
}
}

</style>
