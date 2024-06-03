// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// // MongoDB 연결 설정
// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB에 연결되었습니다.'))
//     .catch(err => console.error('MongoDB 연결 에러:', err));

// // 미들웨어 설정
// app.use(bodyParser.urlencoded({ extended: true }));

// // 사용자 스키마 및 모델 정의
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // 회원가입 라우트 처리
// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const newUser = new User({ username, password });
//         await newUser.save();
//         res.status(201).send('회원가입이 완료되었습니다!');
//     } catch (err) {
//         console.error('회원가입 에러:', err);
//         res.status(500).send('회원가입 중 오류가 발생했습니다.');
//     }
// });

// // 서버 시작
// app.listen(PORT, () => {
//     console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
// });
