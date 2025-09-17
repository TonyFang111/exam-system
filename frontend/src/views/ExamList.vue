<template>
  <div>
    <el-table :data="exams" style="width: 100%">
      <el-table-column prop="title" label="考试名称"/>
      <el-table-column prop="startTime" label="开始时间"/>
      <el-table-column prop="endTime" label="结束时间"/>
      <el-table-column prop="subject" label="科目"/>
      <el-table-column>
        <template #default="scope">
          <el-button @click="deleteExam(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="showAddDialog = true">发布考试</el-button>
    <el-dialog title="发布考试" :visible.sync="showAddDialog">
      <!-- 表单略 -->
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      exams: [],
      showAddDialog: false
    }
  },
  methods: {
    fetchExams() {
      axios.get('/api/exams').then(res => {
        this.exams = res.data
      })
    },
    deleteExam(id) {
      axios.delete(`/api/exams/${id}`).then(() => {
        this.fetchExams()
      })
    }
  },
  mounted() {
    this.fetchExams()
  }
}
</script>
