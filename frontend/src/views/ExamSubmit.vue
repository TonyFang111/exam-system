<template>
  <div>
    <div v-for="question in questions" :key="question.id">
      <div>{{ question.content }}</div>
      <el-input v-model="answers[question.id]" placeholder="请输入答案"/>
    </div>
    <el-button type="primary" @click="submitExam">提交并自动批卷</el-button>
    <div v-if="score !== null">得分：{{ score }}</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      questions: [],
      answers: {},
      score: null
    }
  },
  methods: {
    fetchQuestions() {
      // 这里根据考试ID获取题目
      axios.get('/api/exams/1').then(res => {
        this.questions = res.data.questions
      })
    },
    submitExam() {
      axios.post('/api/submissions', {
        examId: 1, // 示例考试ID
        userId: 123, // 示例用户ID
        answers: JSON.stringify(this.answers)
      }).then(res => {
        this.score = res.data.score
      })
    }
  },
  mounted() {
    this.fetchQuestions()
  }
}
</script>
