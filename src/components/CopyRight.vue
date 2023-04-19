<template>
  <div class="icp">{{`© ${year} ${author} `}}<a href="http://beian.miit.gov.cn/" target="_blank">{{ record }}</a></div>
</template>

<script setup>
const year = new Date().getFullYear();
const author = 'xxxx';
const record = '皖ICP备xxxxx';
</script>

<style>
.icp {
  position: absolute;
  bottom: 0px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: gray;
}
.icp > a {
  color: gray;
  text-decoration: none;
}
.icp > a:hover {
  color: deepskyblue;
  text-decoration: none;
}
</style>
