<template>
  <div class="top">
    <h2>WELCOME</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "I am SPA Template With Vue.js"
    };
  }
};
</script>

<style lang="scss">
.top {
  p {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-size: 26px;
    margin: 30px 0 30px 0;
  }
}
</style>
