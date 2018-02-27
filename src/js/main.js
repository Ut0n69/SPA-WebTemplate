/*---------------------------------
|  import css files
---------------------------------*/
import "../sass/style.scss"

/*---------------------------------
|  import js files
---------------------------------*/
import Vue from "vue"
import VueRouter from "vue-router"

/*---------------------------------
|  vue-plugin
---------------------------------*/
Vue.use(VueRouter)

/*---------------------------------
|  global data
---------------------------------*/
const a = 123

/*---------------------------------
|  vue-template-dom
---------------------------------*/
// home
const _home = {
  template: `
    <div>
      <p>Home</p>
      <router-link @click.native="btn('home')" to="/">
        <button class="btn">Home</button>
      </router-link>
      <router-link @click.native="btn('page1')" to="/page1">
        <button class="btn">Page1</button>
      </router-link>
      <router-link @click.native="btn('page2')" to="/page2">
        <button class="btn">Page2</button>
      </router-link>
    </div>
      `,
  methods: {
    btn: function (val) {
      console.log(`I am ${val}.`)
    }
  }
}

// page1
const _page1 = {
  template: `
  <div>
    <p>Page1</p>
    <router-link @click.native="btn('home')" to="/">
      <button class="btn">Home</button>
    </router-link>
    <router-link @click.native="btn('page1')" to="/page1">
      <button class="btn">Page1</button>
    </router-link>
    <router-link @click.native="btn('page2')" to="/page2">
      <button class="btn">Page2</button>
    </router-link>
  </div>
    `,
  methods: {
    btn: function (val) {
      console.log(`I am ${val}.`)
    }
  }
}

// page2
const _page2 = {
  template: `
  <div>
    <p>Page2</p>
    <router-link @click.native="btn('home')" to="/">
      <button class="btn">Home</button>
    </router-link>
    <router-link @click.native="btn('page1')" to="/page1">
      <button class="btn">Page1</button>
    </router-link>
    <router-link @click.native="btn('page2')" to="/page2">
      <button class="btn">Page2</button>
    </router-link>
  </div>
    `,
  methods: {
    btn: function (val) {
      console.log(`I am ${val}.`)
    }
  }
}

/*---------------------------------
|  vue-router
---------------------------------*/
const routes = [{
    path: "/",
    component: _home
  },
  {
    path: "/page1",
    component: _page1
  },
  {
    path: "/page2",
    component: _page2
  }
]

const router = new VueRouter({
  routes
})

/*---------------------------------
|  vue
---------------------------------*/
const app = new Vue({
  el: "#app",
  router
})