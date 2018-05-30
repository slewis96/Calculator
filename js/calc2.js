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
  disableOps(false);
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
    disableOps(true);
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
  if(typeof value == "object"){
    sumScreen.innerHTML = value.join('');
  } else{
    sumScreen.innerHTML = value;
  }
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
    var answer = completeSum(sumArr, 0);
    refreshScreen(answer);
  }
}
function completeSum(sumArr, startindex){
  var result = 0;
  startindex;
  var num1 = sumArr[startindex];
  var op = sumArr[startindex+1];
  startindex += 2;
  if(op==null){
    return parseInt(num1);
  }
  if(op=="*"){
    result = parseInt(num1) * completeSum(sumArr, startindex);
  }
  if(op=="/"){
    result = parseInt(num1) / completeSum(sumArr, startindex);
  }
  if(op=="-"){
    result = parseInt(num1) - completeSum(sumArr, startindex);
  }
  if(op=="+"){
    result = parseInt(num1) + completeSum(sumArr, startindex);
  }
  return result;
}
function disableOps(bool){
  for (var i = 0; i < opButtons.length; i++) {
    opButtons[i].disabled = bool;
  }
}
