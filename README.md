# local-login module with node.js, html form, javascript

![Update](https://img.shields.io/github/last-commit/hyeok0902e/Node_localLogin)
![Node](https://img.shields.io/badge/Node-v12.7.0-green)
![MySQL](https://img.shields.io/badge/MySQL-v8.0.17-red)
![express](https://img.shields.io/badge/express-v4.17.1-blue)

the overall module for `sign up & sign in` in web(pc, mobile)

# features

- javascript Regex compare _email, phone, nickname ..
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

# useful module used in this

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


