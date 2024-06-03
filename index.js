const express = require('express');
const path = require('path');
const session = require('express-session');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 세션 미들웨어 설정
app.use(session({
  secret: 'your_secret_key_here',
  resave: false,
  saveUninitialized: true
}));

// 사용자 라우트 설정
app.use('/api/users', userRoutes);

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));

// 기본 경로 설정
app.get('/', (req, res) => {
  if (req.session.loggedin) {
    res.sendFile(path.join(__dirname, 'public', 'unity_game.html'));
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
  req.session.loggedin = true;
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// MongoDB 연결 설정
mongoose.connect('mongodb://localhost:3000/myapp')
    .then(() => console.log('MongoDB에 연결되었습니다.'))
    .catch(err => console.error('MongoDB 연결 에러:', err));

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 사용자 스키마 및 모델 정의
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// 회원가입 라우트 처리
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).send('회원가입이 완료되었습니다!');
    } catch (err) {
        console.error('회원가입 에러:', err);
        res.status(500).send('회원가입 중 오류가 발생했습니다.');
    }
});


// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB에 연결되었습니다.'))
//     .catch(err => console.error('MongoDB 연결 에러:', err));

// app.use(bodyParser.urlencoded({ extended: true }));


// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

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


app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});


