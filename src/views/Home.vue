<template>
  <vue-particles
         color="#fff"
         :particleOpacity="0.7"
         :particlesNumber="100"
         shapeType="circle"
         :particleSize="4"
         linesColor="#fff"
         :linesWidth="1"
         :lineLinked="true"
         :lineOpacity="0.4"
         :linesDistance="150"
         :moveSpeed="1"
         :hoverEffect="true"
         hoverMode="grab"
         :clickEffect="false"
         clickMode="push"
         class="lizi"
     />
  <div class="home">
    <HomeTop />
    <router-view/>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HomeTop from '@/components/HomeTop.vue'
</script>

<style lang="less">
  .lizi{
    background-color: #FFB6C1;
    background-image: url('~@/assets/img/bg.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    position:fixed;
    z-index: -1;
    top:0;
    width:100%;
  }
</style>
