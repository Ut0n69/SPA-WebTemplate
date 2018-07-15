<template>
  <div class="Header">
    <h1>
      <a href="/">SPA Template With Vue.js</a>
    </h1>
  </div>
</template>

<style lang="scss">
@import "../../assets/style/base";

.Header {
  width: $headerWidth;
  height: $headerHeight;
  line-height: $headerHeight;
  background: $mainColor;
  border-bottom: 3px solid $subColor;
  color: $fontColor;
  & h1 {
    font-size: 30px;
    margin-left: 50px;
    @include mq() {
      font-size: 20px;
      margin-left: 0;
      text-align: center;
    }
  }
}
</style>
