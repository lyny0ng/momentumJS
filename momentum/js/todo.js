const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    //JSON.stringify 는 object를 string으로 바꿔서 array에 넣어주고 local-storage에 array 형식으로 보여지게함
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//x버튼 클릭시 todo-list에서 li 삭제하는 기능
function deleteTodo (event) {
    //target은 클릭된 html element임, 삭제해야 하는 li를 선택하는 방법
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //id가 string이기 때문에 string으로 바꿔줘야함
    saveToDos();
}

// todolist에 li 와 span 을 넣고 span 안에 newTodo 변수 입력받은 내용을 입력해줌
function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//form은 submit 이벤트를 가지고, submit 의 기본동작은 페이지를 새로고침하는것.
//그래서 preventDefault로 이 기본동작을 막아야함
function handleToDoSubmit (event) {
event.preventDefault();
//toDoInput 값을 newTodo라는 새로운 변수에 복사함(저장함)
const newTodo = toDoInput.value;
//toDoInput 값을 비워줌
toDoInput.value="";
const newTodoObj = {
    text: newTodo,
    id: Date.now(),
};
toDos.push(newTodoObj);
//paintTodo function을 호출
paintTodo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//savedToDos는 string
const savedToDos = localStorage.getItem(TODOS_KEY);

//forEach에 function을 넣지 않고 직접 입력하는 방법
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

//array가 비어있어서 새로운 내용을 입력하면 localstorage가 지워지고 새로 저장됨
//이럴땐 const toDos (array)를 let으로 바꿔서 업데이트가 가능하도록 만들어주고,
//toDos array에 복원해주고 새로운 값을 넣으면 toDos array는 빈값이 아니니까 이전 모든 element를 가지고 있는 array를 저장
//업데이트 될때마다 local-storage에 저장해줘야함

//.filter 반드시 return해야 하기때문에 false를 return한 경우 새 array에 포함되지 않음 -> array의 item을 유지하려면 true를 return

// span이 empty일때 ul에 hidden class 추가하기
if ( span === ''){
    document.getElementById("todo-list").classList.add('hidden');
}