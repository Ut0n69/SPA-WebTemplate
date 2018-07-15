<template>
  <div class="menu">
    <transition name="slide">
      <div class="menu__contents" v-if="showMenu">
        <ul>
          <router-link @click.native="goto" to="/" tag="li">Top</router-link>
          <router-link @click.native="goto" to="/page1" tag="li">Page1</router-link>
          <router-link @click.native="goto" to="/page2" tag="li">Page2</router-link>
        </ul>
      </div>
    </transition>
    <div class="menu__blur" v-if="showMenu" @click="toggleMenu"></div>
    <button @click="toggleMenu" class="menu__button">Menu</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    goto() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/style/base";

.menu {
  & .menu__contents {
    width: $menuWidth;
    height: $menuHeight;
    border-right: 3px solid $subColor;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: $z-menu__contents;
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
      transition: 0.3s;
    }
    & li:hover {
      padding-left: 15px;
      font-style: italic;
    }
  }
  & .menu__blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: $z-menu__blur;
  }
  & .menu__button {
    position: fixed;
    bottom: 30px;
    right: 0;
    width: 50px;
    height: 50px;
    background: $mainColor;
    border: 2px solid $subColor;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    cursor: pointer;
    z-index: $z-menu__button;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-300px);
}
</style>
