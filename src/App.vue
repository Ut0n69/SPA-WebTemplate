<template>
  <div class="top">
    <Header/>
    <Menu/>
    <div class="container">
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Header from '@/components/modules/Header'
  import Menu from '@/components/modules/Menu'

  export default Vue.extend({
    components: {
      Header,
      Menu
    }
  })
  
</script>

<style lang="scss">
  @import "./assets/style/reset";
  @import "./assets/style/base";

  body {
    background: $backgroundColor;
  }
    
  .container {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    border-right: 3px solid $subColor;
    padding-top: $headerHeight;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>