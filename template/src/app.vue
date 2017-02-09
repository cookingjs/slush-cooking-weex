<template>
  <div>
    <h1><%= name %></h1>
    <p><%= description %></p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>
