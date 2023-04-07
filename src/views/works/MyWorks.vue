<template>
  <div class="works">
    <div class="list">
      <div class="item">
        <img v-lazy="require('@/assets/img/works/1.webp')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/1.gif')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/bg.jpeg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/works/1.webp')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/2.jpg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/bg.jpeg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/works/1.webp')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/2.jpg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/bg.jpeg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/works/1.webp')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/2.jpg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/bg.jpeg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/works/1.webp')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/2.jpg')" alt="">
        <div class="name">name</div>
      </div>
      <div class="item">
        <img v-lazy="require('@/assets/img/bg.jpeg')" alt="">
        <div class="name">name</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 添加隐藏类名必需引入
import 'element-plus/theme-chalk/display.css'
</script>

<style lang="less" scoped>
.works {
  .list {
    padding: 20px 35px 80px;
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    column-count: 3;
    column-gap: 15px;
    padding-top: 15px;

    .item {
      background-color: #fff;
      border-radius: 5px;
      margin-bottom: 15px;
      padding: 0;
      box-shadow: 0 0 8px 2px rgba(149, 142, 142, .30196078431372547);
      cursor: pointer;
      transition: all .2s ease-in;
      position: relative;
      width: 100%;
      break-inside: avoid;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      .name {
        padding: 15px;
        word-break: break-all;
      }

      &:hover {
        transform: translateY(-5px);
      }
    }
  }
}
</style>
