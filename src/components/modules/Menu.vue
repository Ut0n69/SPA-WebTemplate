<template>
  <div class="menu">
    <ul>
      <router-link to="/" tag="li">Top</router-link>
      <router-link to="/page1" tag="li">Page1</router-link>
      <router-link to="/page2" tag="li">Page2</router-link>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "../../assets/style/base";

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
      color: $fontColor;
      padding-left: 10px;
      cursor: pointer;
      transition: .3s;
    }
    & li:hover {
      padding-left: 15px;
      font-style: italic;
    }
  }
</style>