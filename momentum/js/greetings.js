

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string(숫자)만 포함된 변수는 대문자로 표기하고, string 을 변수로 저장하고 싶을때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//이름 입력후 submit 했을때 form 영역에 hidden 클래스 추가
function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본동작을 멈추고 우리가 원하는대로 작동하게 하기 위하여 추가
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//local-storage 브라우저에서 기본제공하는 API로 DB에 저장해서 갖다 쓸수있게 해주는 API setItem, .getItem, removeItem

//local-storage에 저장된 username_key가 있는지 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

//username_key가 null일때 HIDDEN_CLASSNAME을 지우고 submit 진행
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
//username_key 값이 있을때
} else {
    paintGreetings(savedUsername);
}