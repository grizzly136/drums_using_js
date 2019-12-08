
for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",onclick);

}
function onclick(){
  for(var i=0;i<7;i++){
  if (this.innerHTML=== document.querySelectorAll("button")[i].innerHTML){
    var audio=new Audio("sounds/"+i+".mp3");
    audio.play();

  }

  }
}
document.addEventListener("keypress",function(event){
  for(var i=0;i<7;i++){
  if (event.key=== document.querySelectorAll("button")[i].innerHTML){
    var audio=new Audio("sounds/"+i+".mp3");
    audio.play();

  }
}
}
);
