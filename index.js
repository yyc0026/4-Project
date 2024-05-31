const express = require('express');
const path = require('path');
const session = require('express-session');
const userRoutes = require('./routes/user');

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

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});






// const path = require('path');
// const express = require('express');
// const userRoutes = require('./routes/user');

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 사용자 라우트 설정
// app.use('/api/users', userRoutes);

// // 정적 파일 제공 설정
// app.use('/Build', express.static(path.join(__dirname, 'Build')));
// app.use('/TemplateData', express.static(path.join(__dirname, 'TemplateData')));

// // 기본 경로 설정
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
// });