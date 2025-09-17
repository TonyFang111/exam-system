<template>
  <div>
    <el-table :data="questions" style="width: 100%">
      <el-table-column prop="content" label="题目内容"/>
      <el-table-column prop="type" label="题型"/>
      <el-table-column prop="subject" label="学科"/>
      <el-table-column prop="difficulty" label="难度"/>
      <el-table-column>
        <template #default="scope">
          <el-button @click="deleteQuestion(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="showAddDialog = true">添加题目</el-button>
    <el-dialog title="添加题目" :visible.sync="showAddDialog">
      <!-- 表单略 -->
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      questions: [],
      showAddDialog: false
    }
  },
  methods: {
    fetchQuestions() {
      axios.get('/api/questions').then(res => {
        this.questions = res.data
      })
    },
    deleteQuestion(id) {
      axios.delete(`/api/questions/${id}`).then(() => {
        this.fetchQuestions()
      })
    }
  },
  mounted() {
    this.fetchQuestions()
  }
}
</script>
