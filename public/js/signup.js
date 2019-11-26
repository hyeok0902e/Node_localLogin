// addr api - daum (kakao)
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

// Regex check
// key 관련 이벤트는 => onkeydown, onkeyup, onkeypress 가 있음 // onkeypress는 백스페이스 인식 불가 
// 정규식 표현 실시간 비교 시 => onkeyup이 가장 정확함

var regExp = ""

// 이메일 형식 체크
document.getElementById('check-email').onkeyup = function(e) {
  regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일
  if(!regExp.test(e.target.value)) {
    console.log(false);
  } else {
    console.log(true);
  }  
}

// 휴대폰번호 형식 체크
document.getElementById('check-phone').onkeyup = function(e) {
  regExp = /^\d{3}-\d{3,4}-\d{4}$/; // 휴대폰

  if(!regExp.test(e.target.value)) {
    console.log(false);
  } else {
    console.log(true);
  }
}





