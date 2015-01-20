var nodes = document.querySelectorAll("a")
// var nodes = bfs();
var i = 0;

var button = document.getElementById("button");
var orderList = document.getElementById("order");
var menu = document.getElementById("type");
var orderList = document.getElementById("order");



function changeOrder(){
  if(menu.value === "dfs"){
    nodes = document.querySelectorAll("a")
  } else {
    nodes = bfs();
  }
  i = 0;
  resetDisplay();
}

function resetDisplay() {
  var orderList = document.getElementById("order");
  for(var j = 0; j<nodes.length; j++){
    nodes[j].style.backgroundColor = "white";
    orderList.innerHTML = '';
  }
}


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




function bfs() {
  var result = []
  var queue = [document.getElementById("root")]
  while(queue.length != 0) {
    var current_node = queue.pop()
    // console.log(current_node)

    if(current_node.tagName == "A"){
      result.push(current_node)
      // console.log(result)
    }

    // console.log(current_node.children)

    if(current_node.children){
      for(var i = 0; i<current_node.children.length; i++) {
        queue.unshift(current_node.children[i]);
        // console.log(queue)
      }
    }
  }
  return result;
}

// def bfs(value)
//   queue = [@root]
//
//   while !queue.empty?
//     current_node = queue.pop
//     p current_node.value
//     return current_node if current_node.value == value
//     queue.unshift(current_node.left) if !current_node.left.nil?
//     queue.unshift(current_node.right) if !current_node.right.nil?
//   end
//   return nil
// end

function nextBFS(){
  var orderList = document.getElementById("order");
  var bfsOrder = bfs(orderList)

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

bfs();
