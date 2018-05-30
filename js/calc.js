//GLOBAL VARIABLES
var sum = "";

//ELEMENTS
var clearButton = document.getElementsByClassName('buttonClear')[0];
var equalButton = document.getElementsByClassName('equals')[0];
var numButtons = document.getElementsByClassName('buttonNum');
var opButtons = document.getElementsByClassName('operator');
var sumScreen = document.getElementById('screen');

//EVENTS
clearButton.addEventListener('click', clear);
equalButton.addEventListener('click', calculate);
addEvent(numButtons, "click", numIn);
addEvent(opButtons, "click", opIn);

//FUNCTIONS
  //enter number
function numIn(){
  sum += this.innerHTML;
  disableOps(false);
  refreshScreen(sum);
}
  //enter operator
function opIn(){
  if(sum.length<1){
    if(this.innerHTML=="-"){
      sum += this.innerHTML;
      refreshScreen(sum);
      disableOps(true);
    }
  }
  else {
    sum += " "+this.innerHTML+" ";
    disableOps(true);
    refreshScreen(sum);
  }
}
  //clear screen
function clear(){
  sum = "";
  refreshScreen(sum);
}
  //set screen
    //value: string to be diplayed
function refreshScreen(value){
  sumScreen.innerHTML = value;
}
  //calculate sum
function calculate(){
  sum = eval(sum);
  refreshScreen(sum);
}
  //set whether operator buttons are disabled
    //bool: true to disable, false to able
function disableOps(bool){
  for (var i = 0; i < opButtons.length; i++) {
    opButtons[i].disabled = bool;
  }
  opButtons[2].disabled = false;
}
  //add events to array of elements
    //btns: array of elements
    //type: type of event
    //funcname: name of function to be called on event
function addEvent(btns, type, funcname){
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener(type, funcname);
  }
}
