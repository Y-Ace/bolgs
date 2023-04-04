<template>
  <div class="index">
    <div class="index-left">
      <div class="card">
        <img src="@/assets/img/1.jpg" class="avtar" alt="" />
        <div class="name">源</div>
        <a href="https://github.com/Y-Ace" target="_blank" rel="noreferrer noopener">https://github.com/Y-Ace</a>
        <div class="article">
          <div class="article-title">文章</div>
          <div class="article-number">1662</div>
        </div>
        <div class="classify">
          <div class="classify-title">分类</div>
          <div class="classify-number">1662</div>
        </div>
      </div>
    </div>
    <div class="index-right">
      <div class="blog">
        <div class="title">我的第一篇博客</div>
        <div class="date">2021-06-02</div>
        <div class="desc">
          从今天起, 我要认真敲代码. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cum distinctio ullam eum ut veroab laborum numquam
          tenetur est in dolorum a sint, assumenda adipisci similique quaerat
          vel. Facere, et.
        </div>
        <a href="blog_content.html?blogId=1" class="detail"
          >查看全文 &gt;&gt;</a
        >
      </div>
      <div class="blog">
        <div class="title">我的第二篇博客</div>
        <div class="date">2021-06-02</div>
        <div class="desc">
          从今天起, 我要认真敲代码. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cum distinctio ullam eum ut veroab laborum numquam
          tenetur est in dolorum a sint, assumenda adipisci similique quaerat
          vel. Facere, et.
        </div>
        <a href="blog_content.html?blogId=2" class="detail"
          >查看全文 &gt;&gt;</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.index {
  height: calc(100% - 50px);
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .index-left {
    height: 100%;
    width: 300px;
    margin: 30px 0;
    .card {
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding: 30px;
      img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
      }
      .name{
        font-size: 18px;
        font-weight:bold;
        padding: 10px;
      }
      a {
        display: block;
        text-align: center;
        color: #999;
        text-decoration: none;
        padding: 10px;
      }
      .article, .classify{
        display: inline-block;
        width: 50%;
        .article-title, .classify-title{
          margin: 10px;
        }
      }
    }
  }
  .index-right {
    margin: 30px 0;
    height: 100%;
    width: calc(100% - 350px);
    overflow: auto;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    .blog {
      width: 100%;
      padding: 10px 20px;
      .title {
        color: black;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        padding: 10px 0;
      }
      .desc {
        color: #000;
        text-indent: 2em;
        margin-top: 10px;
      }
      .date {
        color: #008000;
        margin-top: 10px;
        text-align: center;
      }
      .detail {
        display: block;
        width: 120px;
        height: 40px;
        line-height: 40px;
        color: black;
        text-align: center;
        text-decoration: none;
        margin: 10px auto 0 auto;
        border: 2px solid black;
        /* 给颜色加上过渡效果 */
        transition: all 0.3s;
      }
      .detail:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>
