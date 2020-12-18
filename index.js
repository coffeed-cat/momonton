const title=document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  const listOfClass = title.classList;
  listOfClass.toggle("clicked");
}


function init(){
  title.addEventListener("click",handleClick);
}

init();
