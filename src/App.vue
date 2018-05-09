<template>
  <div class="top">
    <header>
      <h1>
        <a href="/">SPA Template With Vue.js</a>
      </h1>
    </header>
    <div class="menu">
      <ul>
        <router-link to="/" tag="li">Top</router-link>
        <router-link to="/page1" tag="li">Page1</router-link>
        <router-link to="/page2" tag="li">Page2</router-link>
      </ul>
    </div>
    <div class="view">
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss">
  @charset "utf-8";
  @import "./assets/style/reset";
  $headerWidth: 100%;
  $headerHeight: 70px;
  $menuWidth: 250px;
  $menuHeight: calc(100vh - #{$headerHeight});
  $mainColor: #fff;
  $subColor: #000;
  $font-color: #000;
  $backgroundColor: #fff;
  body {
    background: $backgroundColor;
  }
  
  header {
    width: $headerWidth;
    height: $headerHeight;
    line-height: $headerHeight;
    background: $mainColor;
    border-bottom: 3px solid $subColor;
    color: $font-color;
    & h1 {
      font-size: 30px;
      margin-left: 50px;
    }
  }
  
  .menu {
    width: $menuWidth;
    height: $menuHeight;
    border-right: 3px solid $subColor;
    position: fixed;
    top: $headerHeight;
    left: 0;
    & .router-link-exact-active {
      padding-left: 15px;
      font-style: italic;
    }
    & li {
      height: 30px;
      border-bottom: 2px solid $subColor;
      background: $mainColor;
      color: $font-color;
      padding-left: 10px;
      cursor: pointer;
      transition: .3s;
    }
    & li:hover {
      padding-left: 15px;
      font-style: italic;
    }
  }
  
  .view {
    width: calc(100% - #{$menuWidth});
    height: calc(100vh - #{$headerHeight});
    border-right: 3px solid $subColor;
    position: fixed;
    top: $headerHeight;
    left: $menuWidth;
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