//images라는 변수의 array 에 img 파일에 저장되어있는 이미지명을 그대로 입력해줌
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

//random한 이미지를 불러오기 위해 images를 정수로 바꿔주고 랜덤을 가져옴 (array의 길이만큼 곱해주고 정수로 바꿈)
const chosenImage = images[Math.floor(Math.random() * images.length)];

//bgImage라는 변수에 img라는 요소를 만들어줌
const bgImage = document.createElement("img");

//bgImage에 랜덤한 이미지 src를 붙여줌
bgImage.src = `img/${chosenImage}`;
bgImage.style = 

// body에 html을 추가함 (prepend를 사용해도됨. append는 가장뒤/prepend는 가장 위에 나옴)
document.body.appendChild(bgImage);

