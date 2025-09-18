<template>
  <div style="text-align:center;padding:40px;">
    <h2>404 页面未找到</h2>
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
  </div>
</template>
<script>
export default {
  name: 'NotFound'
}
</script>
