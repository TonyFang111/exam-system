import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QuestionBank from '../views/QuestionBank.vue'
import ExamList from '../views/ExamList.vue'
import ExamSubmit from '../views/ExamSubmit.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/question-bank', component: QuestionBank },
  { path: '/exams', component: ExamList },
  { path: '/exam-submit', component: ExamSubmit },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
