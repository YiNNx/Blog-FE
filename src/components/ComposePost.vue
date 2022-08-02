<template>
  <div class="layout"  >
  <div class="editer-wrap">
    <input type="text" v-model="title" placeholder="Title"/>
    <textarea id="editer" v-model="markValue"></textarea>
  </div>
  <div class="render-wrap" v-if="this.deviceType == 'pc'">
    <div id="render" v-html="currentValue"></div>
  </div>
<button v-on:click="post">Post</button>
</div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import PostService from '@/requests/post'

export default {
  name: 'ComposePost',
  data () {
    return {
      markValue: '',
      md: null,
      deviceType: ''
    }
  },
  computed: {
    currentValue () {
      return this.md.render(this.markValue)
    }
  },
  mounted () {
    if (this._isMobile()) {
      this.deviceType = 'mobile'
    } else {
      this.deviceType = 'pc'
    }
  },
  created () {
    this.md = new MarkdownIt()
  },
  methods: {
    post () {
      PostService.Post(this.title, this.md.render(this.markValue))
    },
    _isMobile () {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }

  }
}
</script>

<style>
.layout {
  width: 98%;
  height: 88%;
  position:absolute;
  display: flex;
}
.editer-wrap,.render-wrap {
  border-radius: 20px;
  flex: 1;
  width: 0;
  border: 1px solid rgb(160, 160, 160);
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
  overflow: hidden;
}
.render-wrap {
  border: 1px solid #afafaf;
}
.editer-wrap #editer {
  width: 100%;
  height: 100%;
}
.editer-wrap #editer,
.editer-wrap #editer:focus {
  border: none !important;
  outline: 0;
  line-height: 2em;
  resize: none;
}

.editer-wrap input{
  font-family: Courier;
  font-size: 1.4em;
  border-radius: 24px;
  border: none;
  display: block;
  margin: auto;
  text-align: center;
  padding: 14px 10px;
  width: 600px;
  outline: none;
  color: rgb(66, 66, 66);     /* 设置输入框中竖线的颜色 */
  transition: 0.25s;   /* 设置元素过渡效果 */
}

.render-wrap #render {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  word-break: break-word;
}

.layout button{
  position: fixed;
  top:2em;
  left: 2em;
  background: #626262;
  border-radius: 40px;
  border: 2px solid #565656;
  display: block;
  text-align: center;
  padding: 14px 40px;
  width: 120px;
  outline: none;
  color: rgb(255, 255, 255);     /* 设置输入框中竖线的颜色 */
  transition: 0.25s;
  cursor: pointer;
  font-family: Courier;
  font-size: 1em
}

</style>
