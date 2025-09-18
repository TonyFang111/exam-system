<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/question-bank">题库管理</el-menu-item>
      <el-menu-item index="/exams">考试列表</el-menu-item>
      <el-menu-item index="/exam-submit">考试作答</el-menu-item>
    </el-menu>
    <div style="margin-top:20px;">
      <h3>欢迎使用在线考试系统</h3>
      <p>请选择上方菜单进入功能页面</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
