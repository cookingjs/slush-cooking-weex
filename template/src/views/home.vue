<template>
  <text class="hello">Hello, {{ msg }}</text>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'weex'
      };
    }
  };
</script>

<style>
  .hello {
    color: #00bdff;
  }
</style>
