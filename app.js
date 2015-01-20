var nodes = document.querySelectorAll("a")
var i = 0;

var button = document.getElementById("button");
var orderList = document.getElementById("order");


button.onclick = next;

document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
    // up arrow
  }
  else if (e.keyCode == '40') {
    // down arrow
  }
  else if (e.keyCode == '37') {
    prev();
  }
  else if (e.keyCode == '39') {
    next();
  }

}

function next(){
  var orderList = document.getElementById("order");

  if( i > 0) {
    nodes[i-1].style.backgroundColor = "pink";
  }
  nodes[i].style.backgroundColor = "red";
  orderList.innerHTML += nodes[i].innerHTML + ", ";

  if(!nodes[i+1]){
    i = 0;
    for(var j = 0; j<nodes.length; j++){
      nodes[j].style.backgroundColor = "white";
      orderList.innerHTML = '';
    }
  }
  else{
    i++;
  }
}

function prev(){
  var orderList = document.getElementById("order");

  // if( i > 0) {
  //   nodes[i-1].style.backgroundColor = "pink";
  // }
  nodes[i-1].style.backgroundColor = "red";
  orderList.innerHTML += nodes[i].innerHTML + ", ";

  if(!nodes[i+1]){
    i = 0;
    for(var j = 0; j<nodes.length; j++){
      nodes[j].style.backgroundColor = "white";
      orderList.innerHTML = '';
    }
  }
  else{
    i--;
  }
}
