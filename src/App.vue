<template>
  <nav>
    <router-link to="/">
      <el-button type="primary">home</el-button>
    </router-link> |
    <router-link to="/visit">
      <el-button type="primary">访客申请</el-button>
    </router-link>
  </nav>
  <router-view/>
</template>

<script>
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    text-decoration: none;
  }
}
</style>
