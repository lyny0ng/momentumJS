
const API_KEY = "d8362b5dcea214bd62b0fce4f78a0d0c";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //http response 객체를 래핑한 promise 객체를 반환, 후속처리 메서드인 then을 사용하여 객체를 전달받음
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//openweathermap.org 가입후 API 가져와서 사용 (latitude, longtitude, API key 입력하면 위치, 날씨정보 확인가능)