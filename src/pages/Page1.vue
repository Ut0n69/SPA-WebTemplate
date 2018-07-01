<template>
  <div class="contents">
    <p>{{ title }}</p>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        title: "I am Page1"
      }
    }
  }
</script>

<style lang="scss">
  .contents {
    & p {
      text-align: center;
    }
  }

</style>
