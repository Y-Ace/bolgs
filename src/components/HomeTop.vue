<template>
  <div class="nav">
    <div class="nav-left">
      <img src="@/assets/img/1.jpg" alt="" />
      <span> 我的博客系统 </span>
    </div>
    <div class="nav-right">
      <router-link to="/index">主页</router-link>
      <router-link to="">写博客</router-link>
      <router-link to="">退出登录</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 50px;
  background-color: rgba(51, 51, 51, 0.4);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .nav-left, .nav-right{
    display: flex;
    align-items: center;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 0 10px;
  }
}
</style>
