const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const greetingBox = document.querySelector(".js-greetingBox");

const toDoFormSwitch = document.querySelector(".js-wholeToDo");

const toDoFormer = document.querySelector(".js-toDoForm");

const sayHi=document.querySelector(".js-sayHi");

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const changeBtn=document.querySelector(".js-change");
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleSubmitModify(event){
    event.preventDefault();
    sayHi.addEventListener("animationend",function(){
      sayHi.classList.remove("blur-out-contract");
      form.classList.add("cannotusetodo");
      input.style.display="none";
      sayHi.classList.add("swing-in-bottom-bck-sayHi");
      btnGen();//bbbbbbbbbbbbbbbb
    });
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function modifyName(){
    input.classList.remove("cannotusetodo");
    input.addEventListener("keydown",handleKeydown);
    form.addEventListener("submit",handleSubmitModify);
}

function loading(){
  sayHi.classList.add("swing-in-bottom-bck-sayHi");
}

function start(){
  sayHi.addEventListener("animationend",function(){
    toDoFormSwitch.classList.add("swing-in-bottom-bck");
    toDoFormSwitch.classList.remove("cannotusetodo");
  });
}

function blurOutAnimation(){
  sayHi.classList.add("blur-out-contract");
  form.classList.add("blur-out-contract");
}

  function zikoSyoukai(){
    sayHi.innerText = "Hi! Tell me your Name!";
  }

function handleKeydown(){
  if(input.value.length+1>=7){
    input.style.width = (input.value.length+1)*30+'px';
  }
}

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function handleBtnclick(event){
  localStorage.removeItem("currentUser");
  changeBtn.classList.remove(SHOWING_CN);
  form.classList.remove("blur-out-contract");
  form.classList.remove("cannotusetodo");
  input.style.display="flex";
  input.value = "";
  sayHi.innerText = `It's a beautiful life!`;
  modifyName();
}

function btnGen(){
  changeBtn.classList.add(SHOWING_CN);
  changeBtn.addEventListener("click",handleBtnclick);
}
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

function saveName(name){
    localStorage.setItem(USER_LS,name);
}

function handleSubmitGreeting(event){
    event.preventDefault();
    blurOutAnimation();
    sayHi.addEventListener("animationend",function(){
      sayHi.classList.remove("blur-out-contract");
      form.classList.add("cannotusetodo");
      sayHi.classList.add("swing-in-bottom-bck-sayHi");
      btnGen();
    });
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    input.classList.remove("cannotusetodo");
    input.addEventListener("keydown",handleKeydown);
    form.addEventListener("submit",handleSubmitGreeting);
}


function paintGreeting(text){
  sayHi.innerText = `It's a beautiful life! ${text}!`;
  toDoFormSwitch.classList.remove("cannotusetodo");
  form.classList.add("cannotusetodo");
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    start();
    zikoSyoukai();
    askForName();
  }else{
    loading();
    paintGreeting(currentUser);
    btnGen();//bbbbbbbbbbbbbbbbbbbb
  }
}

function init(){
  loadName();
}

init();
