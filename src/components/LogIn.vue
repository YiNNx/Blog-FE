<template>
  <div class="box">
    <h1>Log In</h1>
      <br>
      <input type="text" v-model="loginForm.email" placeholder="Username"/>
      <input type="password" v-model="loginForm.password" placeholder="Password"/>
      <button v-on:click="login">Log In</button>
  </div>
</template>

<script>
import AuthService from '@/requests/auth'

export default {
  name: 'LogIn',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      AuthService.LogIn(this.loginForm.email, this.loginForm.password)
    }
  }

}
</script>

<style>
.box{
    width: 300px;
    padding: 40px;
    position: absolute;   /* 绝对定位，相对于父标签来进行定位 */
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;  /*表单中内容居中*/
}

/* 设置用户名输入框和密码输入框样式 */
.box input{
  background: #ffffff;
  border-radius: 24px;
  border: 2px solid #8e8e8e;
  display: block;
  margin: 20px auto;
  text-align: center;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: rgb(66, 66, 66);     /* 设置输入框中竖线的颜色 */
  transition: 0.25s;   /* 设置元素过渡效果 */
}

/* 设置文本框获得焦点时的样式 */
.box input[type="text"]:focus,.box input[type="password"]:focus{
    width: 280px;
    border-color: #363737;
}

/* 设置提交按钮的样式 */
.box button{
  background: #626262;
  border-radius: 24px;
  border: 2px solid #565656;
  display: block;
  margin: 20px auto;
  text-align: center;
  padding: 14px 40px;
  width: 220px;
  outline: none;
  color: rgb(255, 255, 255);     /* 设置输入框中竖线的颜色 */
  transition: 0.25s;
  cursor: pointer;    /* 设置光标的样式 */
  font-family: Courier;
}

/* 设置鼠标移人到按钮上的样式 */
.box button:hover{
    width: 300px;
}

</style>
