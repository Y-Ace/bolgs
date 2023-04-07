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
    <router-view v-if="name !== 'Home'"/>
    <div class="welcome" v-else>
      欢迎来到我的博客！
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { unref, watch, ref } from 'vue'
import HomeTop from '@/components/HomeTop.vue'
const route = useRouter().currentRoute
const name = ref()
watch(() => unref(route).query, (toPath) => {
  name.value = route.value.name
}, { immediate: true, deep: true })
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
    height: 100%;
  }
  .welcome{
    color: #fff;
    font-size: 50px;
    margin-top: 150px;
    // transition: all 4s linear;
    animation: spin 6s infinite ease ;
  }
  @keyframes spin {
    0% {
      transform: rotate3d(1, 1, 1, 0);
    }
    100% {
      transform: rotate3d(1, 1, 1, 360deg);
    }
  }
</style>
