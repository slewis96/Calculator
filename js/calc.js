//sum
var sum = [];
//elements
var numButtons = document.getElementsByClassName('buttonNum');
var opButtons = document.getElementsByClassName('operator');
var clearButton = document.getElementsByClassName('buttonClear')[0];
var equalButton = document.getElementsByClassName('equals')[0];
var sumScreen = document.getElementById('screen');
//events
function addEvent(btns, funcname){
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', funcname);
  }
}
clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calculate);
addEvent(numButtons, numIn);
addEvent(opButtons, opIn);

//enter number
function numIn(){
  sum.push(this.innerHTML);
  refreshScreen(sum);
}
//enter operator
function opIn(){
  if(sum.length<1){
    alert("Enter a number before")
  } else {
    sum.push(" ");
    sum.push(this.innerHTML);
    sum.push(" ");
    refreshScreen(sum);
  }
}
//clear screen
function clear(){
  sum = [];
  refreshScreen(sum);
}
//set screen
function refreshScreen(value){
  sumScreen.innerHTML = value.join('');
}
//calculate sum
function calculate(){
  sumStr = sum.join('');
  var sumArr = sumStr.split(" ");
  var lastEle = sumArr[sumArr.length-1];
  if(lastEle==""){
    alert("invalid input");
  }
  else{
    refreshScreen(completeSum(sumArr, 0));
  }
}
function completeSum(sumArr, startindex){
  var num1 = 0;
  var op = "";
  var num2 = 0;
  var result = 0;
  var i;
  for (i = startindex; i < 2; i++) {
    if(isNaN(parseInt(sumArr[i]))){
      parseInt(num1);
      op = sumArr[i];
      alert("op: " + op);
    }
    else{
      num1 = sumArr[i];
      alert("num1: " + num1);
    }
  }
  num2 = sumArr[i];
  alert("num2: " + num2);
  if(op=="*"){
    result = parseInt(num1) * parseInt(num2);
  }
  if(op=="/"){
    result = parseInt(num1) / parseInt(num2);
  }
  if(op=="-"){
    result = parseInt(num1) - parseInt(num2);
  }
  if(op=="+"){
    result = parseInt(num1) + parseInt(num2);
  }
  alert(result);
  return result;
}
