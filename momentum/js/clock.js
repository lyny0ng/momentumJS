
const clock = document.querySelector("h2#clock");

//interval '매번'일어나야 하는 무언가 ( 매 ㅇ초마다 무언가 일어나게 하고 싶을때), setTimeOut 
// 첫번째 argument는 실행하고자 하는 function, 두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할지 쓰면됨

function getClock() {
    // date object를 가져왔기 때문에 지금 시각을 알수 있는거임!
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
//1초마다 변경되는 숫자를 표시하도록 해주는 setInterval 속성
setInterval(getClock, 1000);

//padStart string에 쓸수 있는 function 으로 "1".padStart(2,"0") <-이런식으로 string의 길이가 2가 아니라면 앞에 0을 붙여주도록 할수 있음. padEnd function은 string 뒤에 붙이는거