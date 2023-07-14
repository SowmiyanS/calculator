const output = document.getElementById("display");

function dsply(num){
    output.value +=num;
}
function calculate(){
    try{
        output.value =  eval(output.value);
    }
    catch(err){
        alert("invalid")
    }
}
function clr(){
    output.value = " ";
}
function del(){
  var number1 = document.getElementById("display").value;
  document.getElementById("display").value = 0;
  document.getElementById("display").value = number1.slice(0, -1);
}

