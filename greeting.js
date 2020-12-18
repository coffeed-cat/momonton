const form = document.querySelector(".js-form"),
  input = form.querySelector("input");

const toDoFormSwitch = document.querySelector(".js-wholeToDo");

const toDoFormer = document.querySelector(".js-toDoForm");

const sayHi=document.querySelector(".js-sayHi");

//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const changeBtn=document.querySelector(".js-change");
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function scaleOutAnimation(){
  sayHi.classList.add("scale-out-bottom");
  form.classList.add("scale-out-bottom");
}

function handleSubmitModify(event){
    event.preventDefault();
    scaleOutAnimation();
    sayHi.addEventListener("animationend",function(){
      sayHi.classList.remove("scale-out-bottom");
      form.classList.add("cannotusetodo");
      input.style.display="none";
      sayHi.classList.add("swing-in-bottom-bck-sayHi");
    });
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    btnGen();//bbbbbbbbbbbbbbbb
}

function modifyName(){
    input.classList.remove("cannotusetodo");
    input.addEventListener("keydown",handleKeydown);
    form.addEventListener("submit",handleSubmitModify);
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
  form.classList.remove("scale-out-bottom");
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
    });
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
    btnGen();//bbbbbbbbbbbbbbbb
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
    paintGreeting(currentUser);
    btnGen();//bbbbbbbbbbbbbbbbbbbb
  }
}

function init(){
  loadName();
}

init();
