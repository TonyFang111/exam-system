# exam-system 在线考试系统

## 项目简介

基于 Vue + ElementUI 前端与 Spring Boot 后端的在线考试系统。支持题库管理、考试发布、在线答题、自动批卷等功能。

## 目录结构

```
exam-system/
├── backend/        # Spring Boot 后端
│   ├── src/main/java/com/example/examsystem/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   ├── init.sql
│   ├── pom.xml
├── frontend/       # Vue 3 + ElementUI 前端
│   ├── src/
│   │   ├── views/
│   │   │   ├── QuestionBank.vue
│   │   │   ├── ExamList.vue
│   │   │   ├── ExamSubmit.vue
│   ├── package.json
│   ├── App.vue
│   ├── main.js
├── README.md       # 工程说明
```

## 快速启动

### 后端

1. MySQL 数据库导入 `backend/src/main/resources/init.sql`
2. 配置 `application.yml` 数据库连接
3. 执行 `mvn spring-boot:run`

### 前端

1. 进入 `frontend` 目录
2. 执行 `npm install`
3. 执行 `npm run serve`

## 核心功能

- 题库管理：支持多题型的题目增删查
- 考试发布：考试创建、题目选取、时间设置
- 在线答题与自动判分：学生答题，自动批卷、分数统计

## 后端API接口说明

- `/api/questions` 题库管理
- `/api/exams` 考试管理
- `/api/submissions` 自动批卷

详细接口见代码注释
