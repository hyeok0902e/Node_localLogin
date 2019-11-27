var checkAddr = false; // 주소가 입력되었는지 여부 체크

// addr api - daum (kakao)
document.getElementById("search-addr").onclick = function(e) {
  e.preventDefault(); // 기존 이벤트를 초기화
  new daum.Postcode({
    oncomplete: function(data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
        document.getElementById('addr_full').value = data.address;
        document.getElementById('zipcode').value = data.zonecode;
        checkAddr = true;
        checkAllTrue() 
    }
  }).open();
};

// regExp check
// key 관련 이벤트는 => onkeydown, onkeyup, onkeypress 가 있음 // onkeypress는 백스페이스 인식 불가 
// 정규식 표현 실시간 비교 시 => onkeyup이 가장 정확함

var regExp = ""

// variables for check regExp
var checkEmail = false,
    checkPhone = false;
    checkNickname = false;
    checkPassword = false;

// 이메일 형식 체크
document.getElementById('check-email').onkeyup = function(e) {
  regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일
  if (!regExp.test(e.target.value)) {
    console.log(false);
    document.getElementById('err-msg-email').innerHTML = "이메일 형식이 올바르지 않습니다.";
    checkAllFalse()
  } else {
    console.log(true);
    checkEmail = true;
    document.getElementById('err-msg-email').innerHTML = "";
    checkAllTrue();
  }  
}

// 닉네임 형식 체크
document.getElementById('check-nickname').onkeyup = function(e) {
  regExp =  /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{3,15}$/; 
  if (!regExp.test(e.target.value)) {
    console.log(false);
    document.getElementById('err-msg-nickname').innerHTML 
      = "형식이 올바르지 않습니다. 특수문자를 제외한 3~15자리 조합을 입력해주세요.";
    checkAllFalse();
  } else {
    console.log(true);
    checkNickname = true;
    document.getElementById('err-msg-nickname').innerHTML = ""
    checkAllTrue();
  } 
}

// 휴대폰번호 형식 체크
document.getElementById('check-phone').onkeyup = function(e) {
  regExp = /^\d{3}-\d{3,4}-\d{4}$/; 

  if (!regExp.test(e.target.value)) {
    console.log(false);
    document.getElementById('err-msg-phone').innerHTML = "휴대폰 형식이 올바르지 않습니다.";
    checkAllFalse();
  } else {
    console.log(true);
    checkPhone = true;
    document.getElementById('err-msg-phone').innerHTML = "";
    checkAllTrue();
  }
}

// 비밀번호 정규식 체크
document.getElementById('check-pw1').onkeyup = function(e) {
  regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  if (!regExp.test(e.target.value)) {
    console.log(false);
    document.getElementById('err-msg-pw1').innerHTML 
      = "형식이 옮바르지 않습니다. 숫자,영문,특수문자를 포함한 8~16자리 조합을 입력해주세요.";
    // checkAllFalse();
    console.log(document.getElementById('check-pw1').value)
    checkPasswordEqual();
  } else {
    console.log(true)
    checkPassword = true;
    document.getElementById('err-msg-pw1').innerHTML = "";
    // checkAllTrue();
    checkPasswordEqual();
  }
}

document.getElementById('check-pw2').onkeyup = function(e) {
  checkPasswordEqual();
  console.log(document.getElementById('check-pw2').value)
}

// 
function checkAllTrue() {
  if (checkEmail && checkPhone && checkAddr && checkPassword && checkNickname) {
    document.getElementById('signup-submit').disabled = false;
    document.getElementById('signup-submit').style.opacity = 1;
  }
}
function checkAllFalse() {
  document.getElementById('signup-submit').disabled = true;
  document.getElementById('signup-submit').style.opacity = 0.6;
}

// 비밀번호 일치 여부 체크
function checkPasswordEqual() {
  if (document.getElementById('check-pw1').value == document.getElementById('check-pw2').value) {
    document.getElementById('err-msg-pw2').innerHTML = "";   
    checkAllTrue();
  } else {
    document.getElementById('err-msg-pw2').innerHTML = "비밀번호가 일치하지 않습니다.";
    checkAllFalse();
  }
}





