# :point_up: local-login module with node.js, html form, javascript

![Update](https://img.shields.io/github/last-commit/hyeok0902e/Node_localLogin)
![Node](https://img.shields.io/badge/Node-v12.7.0-green)
![MySQL](https://img.shields.io/badge/MySQL-v8.0.17-red)
![express](https://img.shields.io/badge/express-v4.17.1-blue)

the overall module for `sign up & sign in` in web(pc, mobile)

# features

- javascript Regex compare _email, phone, nickname ..
```
<!-- Regex: email -->
regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일

<!-- Regex: phone -->
// 010-7777-7777
regExp = /^\d{3}-\d{3,4}-\d{4}$/; // 휴대폰

<!-- Regex: nickname -->
// 영문, 한글, 숫자만 사용가능
regExp =  /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{3,15}$/; 

<!-- Example: test regex with value -->
if(!regExp.test(e.target.value)) {
  console.log(false);
} else {
  console.log(true);
}
```
- search api for address _[daum api (kakao)](http://postcode.map.daum.net/guide)
```
<!-- javascript code (/public/js/signup.js) -->
document.getElementById("search-addr").onclick = function(e) {
  e.preventDefault(); // 기존 이벤트를 초기화
  new daum.Postcode({
    oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
      // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      console.log(data);
    }
  }).open();
};
```
- html form using view engine ejs

# useful module or function used in this

### connect-flash
```
<!-- app.js -->
const flash = require('connect-flash');
app.use(flash());

<!-- set msg in router -->
req.flash('signupErrorMsg', 'please enter all information inside of form!');

<!-- use msg in router -->
res.render('user/signup', { signupErrorMsg: req.flash('signupErrorMsg') });

```

### res.locals.val
- how we can set data(variable) used in all views like footer, header..
- we can use middlewares in app.js
```
<!-- app.js -->
// this middlewares should will be declared before setting router
app.use((req, res, next) => {
  res.locals.var1 = "data";
});
```

### bcrypt: password hashing
- usage
```
<!-- install -->
$npm install bcrypt

<!-- technique -->
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'password_text';

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    // Store hash in your password DB.
  });
});

<!-- check a password -->
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
  // res => true or false
});
```

### cancel git commit
- canel latest commit & preservate code files in working directory
```
<!-- check commit list -->
$ git log 

<!-- cancel latest commit -->
$ git reset --soft HEAD^
```

# :keyboard: To-Do
### 
- error page
- phone sms certification
- nickname duplicate check