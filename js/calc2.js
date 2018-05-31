//GLOBAL VARIABLES
var sum = [];

//ELEMENTS
var numButtons = document.getElementsByClassName('buttonNum');
var opButtons = document.getElementsByClassName('operator');
var clearButton = document.getElementsByClassName('buttonClear')[0];
var equalButton = document.getElementsByClassName('equals')[0];
var sumScreen = document.getElementById('screen');

//EVENTS
clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calculate);
addEvent(numButtons, numIn);
addEvent(opButtons, opIn);

//FUNCTIONS
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
    //value: string to be diplayed
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
    //var answer = completeSum(sumArr, 0);
    var answer = completeSumDMAS(sumArr);
    sum = [""];
    sum.push(answer);
    refreshScreen(sum);
  }
}
  //calculate recursively with bidmas
    //summArr: array in the form [num, op, num, op etc...]
function completeSumDMAS(sumArr){
  if(sumArr.length<=1){
    var num = sumArr[0];
    return parseInt(num);
  }
  else{
    for (var i = 1; i < sumArr.length; i+=2) {
      var op = sumArr[i];
      if(op=="-"){
        var sumArr1 = sumArr.slice(0, i);
        var sumArr2 = sumArr.slice(i+1, sumArr.length);
        return completeSumDMAS(sumArr1) - completeSumDMAS(sumArr2);
      }
    }
    for (var i = 1; i < sumArr.length; i+=2) {
      var op = sumArr[i];
      if(op=="+"){
        var sumArr1 = sumArr.slice(0, i);
        var sumArr2 = sumArr.slice(i+1, sumArr.length);
        return completeSumDMAS(sumArr1) + completeSumDMAS(sumArr2);
      }
    }
    for (var i = 1; i < sumArr.length; i+=2) {
      var op = sumArr[i];
      if(op=="*"){
        var sumArr1 = sumArr.slice(0, i);
        var sumArr2 = sumArr.slice(i+1, sumArr.length);
        return completeSumDMAS(sumArr1) * completeSumDMAS(sumArr2);
      }
    }
    for (var i = 1; i < sumArr.length; i+=2) {
      var op = sumArr[i];
      if(op=="/"){
        var sumArr1 = sumArr.slice(0, i);
        var sumArr2 = sumArr.slice(i+1, sumArr.length);
        return completeSumDMAS(sumArr1) / completeSumDMAS(sumArr2);
      }
    }
  }
}
  //calculate right to left recursively
    //summArr: array in the form [num, op, num, op etc...]
    //startindex: used to recursively go over indexs by 2
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
  //set whether operator buttons are disabled
    //bool: true to disable, false to able
function disableOps(bool){
  for (var i = 0; i < opButtons.length; i++) {
    opButtons[i].disabled = bool;
  }
}
  //add events to array of elements
    //btns: array of elements
    //type: type of event
    //funcname: name of function to be called on event
function addEvent(btns, funcname){
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', funcname);
  }
}
