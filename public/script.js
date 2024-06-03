// // 로그인 폼 처리
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   var username = document.getElementById('username').value;
//   var password = document.getElementById('password').value;
//   if (username === "") {
//       alert("사용자명을 입력하세요.");
//       event.preventDefault(); // 폼 제출 거부.
//       return;
//   }
//   if (password === "") {
//       alert("비밀번호를 입력하세요.");
//       event.preventDefault(); // 폼 제출 거부.
//       return;
//   }
// });

// // 회원가입 처리
// document.getElementById('registerForm').addEventListener('submit', function(event) {
//   var newUsername = document.getElementById('new-username').value;
//   var newPassword = document.getElementById('new-password').value;
//   if (newUsername === "") {
//       alert("새 사용자명을 입력하세요.");
//       event.preventDefault(); // 폼 제출을 거부.
//       return;
//   }
//   if (newPassword === "") {
//       alert("새 비밀번호를 입력하세요.");
//       event.preventDefault(); // 폼 제출 거부.
//       return;
//   }
// });

// // 로그인 Form과 회원가입 Form 전환
// document.getElementById('showRegister').addEventListener('click', function(event) {
//   event.preventDefault();
//   document.getElementById('login-container').style.display = 'none';
//   document.getElementById('register-container').style.display = 'block';
// });

// document.getElementById('showLogin').addEventListener('click', function(event) {
//   event.preventDefault();
//   document.getElementById('register-container').style.display = 'none';
//   document.getElementById('login-container').style.display = 'block';
// });


// 로그인 폼 처리
document.getElementById('loginForm').addEventListener('submit', function(event) {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === "") {
      alert("아이디를 입력하세요.");
      event.preventDefault(); // 폼 제출을 막습니다.
      return;
  }
  if (password === "") {
      alert("비밀번호를 입력하세요.");
      event.preventDefault(); // 폼 제출을 막습니다.
      return;
  }
});

// 회원가입 폼 처리
document.getElementById('registerForm').addEventListener('submit', function(event) {
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;
  if (newUsername === "") {
      alert("새 아이디를 입력하세요.");
      event.preventDefault(); // 폼 제출을 막습니다.
      return;
  }
  if (newPassword === "") {
      alert("새 비밀번호를 입력하세요.");
      event.preventDefault(); // 폼 제출을 막습니다.
      return;
  }
});

// 로그인 폼과 회원가입 폼 전환
document.getElementById('showRegister').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('register-container').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('register-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
});
