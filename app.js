const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require("./routes/index");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;
const port =  process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api', indexRouter);

const mongoURI = MONGODB_URI_PROD;
console.log(mongoURI);
mongoose.connect(mongoURI).then(() => {
    console.log("mongoose connected")
}).catch((err) => {
    console.log("DB connected failed",err)
});

app.listen(port, () => {
    console.log("Server is running on port 5000");
});


/*
// restful API
// 주소 + http 명령어
// /Task + post , /Task + get, /Task + put, /Task + delete

1. 할일 추가  /tasks post
2. 할일 목록 조회 /tasks get
3. 할일에 대해서 끝남 안끝남 표시 /tasks/:id put (수정 명령어는 put임)
4. 할일 삭제 /tasks/:id delete 1개 삭제, /tasks delete 전체 삭제
*/


