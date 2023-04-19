<template>
<!--  <nav>-->
<!--    <router-link to="/">-->
<!--      <el-button type="primary">home</el-button>-->
<!--    </router-link> |-->
<!--    <router-link to="/visit">-->
<!--      <el-button type="primary">访客申请</el-button>-->
<!--    </router-link>-->
<!--  </nav>-->
  <router-view/>
  <router-view>
    <copy-right>皖ICP备2022005213号-1</copy-right>
  </router-view>
</template>
<script setup>
import CopyRight from '@/components/CopyRight.vue';
</script>
